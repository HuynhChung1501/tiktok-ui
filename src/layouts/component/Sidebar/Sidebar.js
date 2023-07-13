import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from '~/layouts/component/Sidebar/Menu';
import { HomeIcon, GroupUserIcon, LiveIcon, HomeIconActive, GroupUserIconActive, LiveIconActive } from '~/component/Icon';
import SidebarAccount from './SidebarAccount/SidebarAccount';

const cx = classNames.bind(styles);
const Menu_Sidebar = [
    {
        id: 1,
        to: '/',
        iconLeftActive: <HomeIconActive className={cx('icon')} />,
        iconLeft: <HomeIcon className={cx('icon')} />,
        title: 'For You',
    },
    {
        id: 2,
        to: '/following',
        iconLeftActive: <GroupUserIconActive className={cx('icon')} />,
        iconLeft: <GroupUserIcon className={cx('icon')} />,
        title: 'Following',
    },
    {
        id: 3,
        to: '/live',
        iconLeftActive: <LiveIconActive className={cx('icon')} />,
        iconLeft: <LiveIcon className={cx('icon')} />,
        title: 'LIVE',
    },
];


function Sidebar() {

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {Menu_Sidebar.map((item) => (
                    <MenuItem
                        key={item.id}
                        to={item.to}
                        title={item.title}
                        iconLeft={item.iconLeft}
                        iconLeftActive={item.iconLeftActive}
                    />
                ))}
            </Menu>
            <SidebarAccount />
        </aside>
    );
}
Sidebar.prototype = {
    title: PropTypes.string,
    IconLeft: PropTypes.node,
};

export default Sidebar;
