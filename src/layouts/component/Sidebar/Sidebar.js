import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { Menu } from '~/layouts/component/Sidebar/Menu';
import { MenuItem } from '~/layouts/component/Sidebar/Menu';
import { Home, UserDouble, Live } from '~/component/Icon';

const cx = classNames.bind(styles);
const Menu_Sidebar = [
    {
        id: 1,
        to: '/',
        icon: <Home className={cx('icon')} />,
        title: 'For You',
    },
    {
        id: 2,
        to: '/',
        icon: <UserDouble className={cx('icon')} />,
        title: 'Following',
    },
    {
        id: 3,
        to: '/',
        icon: <Live className={cx('icon')} />,
        title: 'LIVE',
    },
];

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {Menu_Sidebar.map((item) => (
                    <MenuItem
                        title={item.title}
                        iconLeft={item.icon}
                        to={item.to}
                    />
                ))}
            </Menu>
        </aside>
    );
}
Sidebar.prototype = {
    title: PropTypes.string,
    IconLeft: PropTypes.node,
};

export default Sidebar;
