import { Menu, Layout, Drawer } from 'antd';
import { useState } from 'react';
import { useMenuItems } from '../hooks/useMenuItems.tsx';
import { CloudOutlined } from '@ant-design/icons';

const { Header } = Layout;

export const TheHeader = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const toggleDrawer = () => setShowDrawer(!showDrawer);

    const { baseMenuItems, dynamicMenuItems } = useMenuItems(toggleDrawer);

    return (
        <Header style={HeaderStyles}>
            <CloudOutlined style={{ color: '#fff', fontSize: 38 }} />

            <Menu theme="dark" mode="horizontal" items={dynamicMenuItems} style={{ minWidth: '50%', justifyContent: 'end' }} />

            <Drawer title="Main menu" placement="right" onClose={toggleDrawer} open={showDrawer}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={DrawerMenuStyles}
                    items={baseMenuItems}
                />
            </Drawer>
        </Header>
    );
};

const DrawerMenuStyles = {
    height: '100%',
    borderRight: 0,
};

const HeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
