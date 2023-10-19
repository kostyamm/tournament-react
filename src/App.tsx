import { ConfigProvider, ThemeConfig } from 'antd';
import { AppRouter } from './AppRouter.tsx';

const themeConfig: ThemeConfig = {
    components: {
        Layout: {
            headerBg: 'rgb(250, 250, 250)',
            headerPadding: '0 20px',
        },
        Menu: {
            itemBg: 'rgb(250, 250, 250)',
        }
    },
    token: {
        borderRadius: 4,
    },
};

export const App = () => {
    // https://nextui.org/docs/components/input
    // https://ui.shadcn.com/
    return (
        <ConfigProvider theme={themeConfig}>
            <AppRouter />
        </ConfigProvider>
    );
};
