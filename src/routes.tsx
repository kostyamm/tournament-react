import { ComponentType } from 'react';
import { RouteObject } from 'react-router/dist/lib/context';

type IRoute = {
    path: RouteObject['path'];
    Element: ComponentType;
    ErrorBoundary?: RouteObject['ErrorBoundary']
}

const pages: Record<any, any> = import.meta.glob("./pages/**/*.tsx", { eager: true });

const extractKeyFromPath = (str: string) => {
    const regex = /\/([^/]+)\.tsx$/;
    const match = str.match(regex)?.[1];

    if (!match) {
        return ''
    }

    return match
        .replace(/\b\w/g, match => match.toUpperCase()) // Capitalize First Letter
        .replace(/:/g, '')
}

export const routes: Array<IRoute> = Object.keys(pages).map((path) => {
    const normalizedPath = path
        .match(/\.\/pages\/(.*)\.tsx$/)?.[1]
        .replace(/\/index/, "")
        .toLowerCase()

    const elementKey: any = extractKeyFromPath(path)
    const isIndex = normalizedPath === "index"

    return {
        path: isIndex ? "/" : `/${normalizedPath}`,
        Element: pages[path][elementKey],
    }
})

// export const router = createBrowserRouter(
//     routes.map(({ Element, ErrorBoundary, ...rest }) => ({
//         ...rest,
//         element: <Element />,
//         ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
//     }))
// );