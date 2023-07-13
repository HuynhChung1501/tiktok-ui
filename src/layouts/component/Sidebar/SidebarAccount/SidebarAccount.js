import classNames from "classnames/bind";
import styles from "./SidebarAccount.module.scss";
import AccountItem from "./AccountItem/AccountItem";

const cx = classNames.bind(styles)

function SidebarAccount() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label-title')}>Following accounts</p>
            <div className={cx('body')}>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </div>
        </div>
    );
}

export default SidebarAccount;