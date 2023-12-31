import { forwardRef } from 'react';

import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ children, to, href, type, smail = false, large = false, primary = false, outline = false, outline_primary = false, rounded = false, disabled = false, className, iconLeft, iconRight, onClick, ...passProps }, ref) {
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
                smail,
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

export default forwardRef(Button);
