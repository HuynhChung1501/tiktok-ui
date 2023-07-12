import classNames from 'classnames/bind';
import styles from './popper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

wrapper.prototype = {
    children: PropTypes.node.isRequired
}

export default wrapper;
