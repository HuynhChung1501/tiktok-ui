import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ children, to, href, type, smail = false, large = false, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp
            className={cx('wrapper', type, {
                smail,
                large,
            })}
            {...props}
        >
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
