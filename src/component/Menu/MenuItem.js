import PropTypes from 'prop-types';

import Button from '../Button/Button';
import classNames from 'classnames/bind';
import styles from './menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button
            className={classes}
            iconLeft={data.icon}
            to={data.to}
            onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.prototype = {
    data: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
