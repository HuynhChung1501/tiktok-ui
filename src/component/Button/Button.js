import { forwardRef } from 'react';
import PropTypes from "prop-types";

import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ children,
    to,
    href,
    type,
    small = false,
    large = false,
    primary = false,
    outline = false,
    outline_primary = false,
    rounded = false,
    disabled = false,
    className,
    iconLeft,
    iconRight,
    onClick,
    ...passProps },
    ref) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    //remove evenet listenter when is disabled
    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp
            ref={ref}
            className={cx('wrapper', {
                small,
                large,
                primary,
                outline,
                outline_primary,
                disabled,
                rounded,
                [className]: className,

            })}
            {...props}
        >
            {iconLeft && <span className={cx('icon')} >{iconLeft}</span>}
            <span>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Comp >
    );
}

Button.prototype = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    type: PropTypes.string,
    small: PropTypes.bool,
    large: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    outline_primary: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    onClick: PropTypes.func,
}

export default forwardRef(Button);
