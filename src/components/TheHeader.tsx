import { Menu, Layout, Drawer, Grid, MenuProps } from 'antd';
import { useState } from 'react';
import { CloudOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { useBreakpoint } = Grid;

type MenuItem = Required<MenuProps>['items'][number];

const menuItems: Array<MenuItem> = [
    { key: '/matches', label: <Link to="/matches">Matches</Link> },
    { key: '/user', label: <Link to="/user">User</Link> },
    { key: '/login', label: <Link to="/login">Login</Link> },
];

export const TheHeader = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const toggleDrawer = () => setShowDrawer(!showDrawer);

    const breakpoints = useBreakpoint();
    const { pathname } = useLocation();

    const menuItemsMobile = [{
        key: 'toggle-menu',
        itemIcon: <MenuOutlined />,
        onClick: toggleDrawer,
    }];

    const dynamicMenuItems = breakpoints.md ? menuItems : menuItemsMobile;
    const activeItem: MenuItem = menuItems.find(({ key }) => pathname.includes(key));

    return (
        <Layout.Header style={HeaderStyles}>
            <Link to="/" style={{ fontSize: 38, height: '100%' }}>
                <CloudOutlined />
            </Link>

            <Menu
                selectable={!!activeItem?.key}
                selectedKeys={[activeItem?.key]}
                mode="horizontal"
                items={dynamicMenuItems}
                style={MenuStyles}
            />

            <Drawer title="Main menu" placement="right" onClose={toggleDrawer} open={showDrawer}>
                <Menu
                    mode="inline"
                    style={DrawerMenuStyles}
                    items={menuItems}
                />
            </Drawer>
        </Layout.Header>
    );
};

const HeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const DrawerMenuStyles = {
    height: '100%',
    borderRight: 0,
};

const MenuStyles = {
    minWidth: '50%',
    justifyContent: 'end',
};
