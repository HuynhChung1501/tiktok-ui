import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Header.module.scss';
// import images from '~/assets/images';
import AccountItem from '~/component/AccountItem/index';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setsearchResult] = useState([]);

    useEffect(() => {
        // nếu setsearchResult.length có dộ dài lớn hơn 0 thì hiện thị popper
        setTimeout(() => {
            setsearchResult([]);
        }, 1000);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <a href="/">
                    {/* <img src={images.logo1} alt="logo tiktok" width={118} height={42} /> */}
                </a>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Acounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input className={cx('input-search')} placeholder="Tìm kiếm" spellCheck={false} />
                        <button className={cx('btn-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button primary>Login</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
