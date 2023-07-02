import classNames from 'classnames/bind';
import styles from './ACcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://antimatter.vn/wp-content/uploads/2023/01/hinh-anh-avatar-dep-cute-ngau-601x600.jpg"
                alt="Name"
            />
            <div className={cx('info')}>
                <div className={cx('info-name')}>
                    <span>Nguyễn Chung</span>
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                </div>
                <div className={cx('info-desc')}>Nguyễn Chung</div>
            </div>
        </div>
    );
}

export default AccountItem;
