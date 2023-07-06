import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";

import styles from "./search.module.scss";
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem/index';

const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setsearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef()

    useEffect(() => {
        // nếu setsearchResult.length có dộ dài lớn hơn 0 thì hiện thị popper
        setTimeout(() => {
            setsearchResult([1, 1, 1]);
        }, 1000);
    }, []);

    function handleResetSearch() {
        setSearchValue('')
        inputRef.current.focus()
    }

    function handleHidenResult() {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            interactive={true}
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHidenResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    {
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Acounts</h4>
                            < AccountItem />
                            < AccountItem />
                            < AccountItem />
                        </PopperWrapper>
                    }
                </div>
            )}
        >
            <div className={cx('search')}>
                <input className={cx('input-search')} ref={inputRef} value={searchValue} required placeholder="Tìm kiếm" spellCheck={false} onFocus={() => setShowResult(true)} onChange={e => {
                    setSearchValue(e.target.value)
                }} />
                {
                    !!searchValue && <button className={cx('btn-clear')} onClick={handleResetSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                }

                <button className={cx('btn-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;