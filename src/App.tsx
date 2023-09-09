import { RouterProvider } from 'react-router-dom';
import { router } from './Root.tsx';
import { ConfigProvider, ThemeConfig } from 'antd';

const themeConfig: ThemeConfig = {
    token: {
        borderRadius: 4,
    },
};

export const App = () => {
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    return (
        <ConfigProvider theme={themeConfig}>
            <RouterProvider router={router} />
        </ConfigProvider>
    );
};
