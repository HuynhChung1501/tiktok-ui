import classNames from "classnames/bind";

import styles from "./account.module.scss";
import Image from "~/component/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <Link to={'./'} className={cx('accountItem')}>
            <Image className={cx('avatar')} src={'https://antimatter.vn/wp-content/uploads/2023/01/hinh-anh-avatar-dep-cute-ngau-601x600.jpg'} alt={'name'} />
            <div className={cx('info')}>
                <div className={cx('info-name')}>
                    <span>NguyễnHuỳnhChung</span>
                    {true && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
                </div>
                <div className={cx('info-desc')}>Nguyễn Huỳnh Chung</div>
            </div>
        </Link>
    );
}

export default AccountItem;