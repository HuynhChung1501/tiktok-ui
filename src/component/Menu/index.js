import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './menu.module.scss';
import { Wrapper as PopperWrapper } from "~/component/Popper";
import MenuItem from './MenuItem';

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {

    const renderItem = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <Tippy
            interactive={true}
            visible
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;