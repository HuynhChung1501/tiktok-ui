import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import axios from "axios";

import styles from './search.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem/index';
import { useDebounce } from "~/hooks";

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setsearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounce = useDebounce(searchValue, 300)

    useEffect(() => {
        if (!debounce.trim()) {
            setsearchResult([])
            return;
        }
        setLoading(true);
        axios
            .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
                params: {
                    q: debounce,
                    type: 'less'
                },
            })
            .then((res) => {
                setsearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false)
            });
    }, [debounce]);

    function onchangeInputSearch(e) {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
        return;
    }

    function handleResetSearch() {
        setSearchValue('');
        setsearchResult([]);
        inputRef.current.focus();
    }

    function handleHidenResult() {
        setShowResult(false);
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
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    }
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    className={cx('input-search')}
                    ref={inputRef}
                    value={searchValue}
                    required
                    placeholder="Tìm kiếm"
                    spellCheck={false}
                    onFocus={() => setShowResult(true)}
                    onChange={onchangeInputSearch}
                />
                {!!searchValue && !loading && (
                    <button className={cx('btn-clear')} onClick={handleResetSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <button className={cx('btn-loading')} onClick={handleResetSearch}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}

                <button className={cx('btn-search')}
                    onMouseDown={e => e.preventDefault()}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
