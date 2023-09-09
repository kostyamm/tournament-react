import { Grid, MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { useBreakpoint } = Grid;

const menuOptions: MenuProps['items'] = [
    { key: 'home', label: <Link to="/">Home</Link> },
    { key: 'user', label: <Link to="/user">User</Link> },
    { key: 'login', label: <Link to="/login">Login</Link> },
];

type MenuItemsType = {
    baseMenuItems: MenuProps['items'],
    dynamicMenuItems: MenuProps['items']
}

export const useMenuItems = (toggleDrawer: () => void): MenuItemsType => {
    const breakpoints = useBreakpoint();

    const menuOptionsMobile = [{
        key: 'toggle-menu',
        itemIcon: <MenuOutlined />,
        onClick: toggleDrawer,
    }];

    const dynamicMenuItems = breakpoints.md ? menuOptions : menuOptionsMobile;

    return {
        baseMenuItems: menuOptions,
        dynamicMenuItems,
    };
};