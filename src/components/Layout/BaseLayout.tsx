import { GlobalToken, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { TheHeader } from '../TheHeader.tsx';
// import { TheFooter } from '../TheFooter.tsx';

const { Content } = Layout;
const { useToken } = theme;

export const BaseLayout = () => {
    const { token } = useToken();

    return (
        <Layout>
            <TheHeader />

            <Content style={getContentStyles(token)}>
                <Outlet />
            </Content>

            {/*<TheFooter />*/}
        </Layout>
    );
};

const getContentStyles = (token: GlobalToken) => ({
    padding: token.paddingMD,
    margin: 0,
    minHeight: 'calc(100vh - 64px)',
    background: token.colorBgContainer,
    // maxWidth: '1200px',
    // width: '100%'
    // margin: '0 auto',
});