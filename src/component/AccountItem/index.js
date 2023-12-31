// import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import styles from './ACcountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <div className={cx('info-name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />}
                </div>
                <div className={cx('info-desc')}>{data.nickname}</div>
            </div>
        </Link>
    );
}

export default AccountItem;
