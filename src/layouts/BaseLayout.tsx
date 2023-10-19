import { GlobalToken, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { TheHeader } from '../components/TheHeader.tsx';

const { useToken } = theme;

export const BaseLayout = () => {
    const { token } = useToken();

    return (
        <Layout>
            <TheHeader />

            <Layout.Content style={getContentStyles(token)}>
                <Outlet />
            </Layout.Content>
        </Layout>
    );
};

const getContentStyles = (token: GlobalToken) => ({
    padding: token.Layout?.headerPadding,
    margin: 0,
    minHeight: 'calc(100vh - 64px)',
    // background: token.colorBgContainer,
});