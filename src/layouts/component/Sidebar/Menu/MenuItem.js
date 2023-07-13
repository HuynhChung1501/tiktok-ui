import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ iconLeft, iconLeftActive, to, title }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <div className={cx('iconLeft')}>
                {iconLeft}
            </div>
            <div className={cx('iconLeftACtive')}>
                {iconLeftActive}
            </div>
            <div className={cx('menu-item-title')}>{title}</div>
        </NavLink>
    );
}
MenuItem.prototype = {
    iconLeft: PropTypes.node.isRequired,
    iconLeftActive: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default MenuItem;
