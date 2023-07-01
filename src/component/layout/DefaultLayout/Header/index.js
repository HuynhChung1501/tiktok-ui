import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { Wrapper as PopperWrapper } from "~/component/Popper";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setsearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => { setsearchResult([1, 2, 3]) }, 1000)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <a href="/">
                    <img src={images.logo} alt="logo tiktok" width={118} height={42} />
                </a>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <PopperWrapper>
                            <div className="box" tabIndex="-1" {...attrs}>
                                My tippy box
                            </div>
                        </PopperWrapper>
                    )}>
                    <div className={cx("search")}>
                        <input className={cx("input-search")} placeholder="Tìm kiếm" spellCheck={false} />
                        <button className={cx("btn-clear")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <button className={cx("btn-search")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
                        </button>
                    </div>
                </Tippy>
                <div className={cx("action")}>

                </div>
            </div>
        </header>
    );
}

export default Header;