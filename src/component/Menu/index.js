import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './menu.module.scss';
import { Wrapper as PopperWrapper } from "~/component/Popper";
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles)

const defaultFn = () => { }

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isChildren = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if (isChildren) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }} />
        })
    }

    return (
        <Tippy
            interactive={true}
            delay={[0, 500]}
            placement="bottom-end"
            hideOnClick={false}
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && <Header title={current.title} onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}
                        <div className={cx('menu-body')}>
                            {renderItem()}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.prototype = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
}

export default Menu;