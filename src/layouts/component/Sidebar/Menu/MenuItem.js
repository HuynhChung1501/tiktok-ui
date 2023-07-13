import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ iconLeft, to, title }) {
    return (
        <Link to={to} className={cx('menu-item')}>
            {iconLeft && iconLeft}
            <div className={cx('menu-item-title')}>{title}</div>
        </Link>
    );
}
MenuItem.prototype = {
    iconLeft: PropTypes.node,
    to: PropTypes.string,
    title: PropTypes.string,
};

export default MenuItem;
