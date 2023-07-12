import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling
import { faBookmark, faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCoins, faEarthAsia, faEllipsisVertical, faGear, faPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
// import images from '~/assets/images';
// import route from "~/component/config/routes";
import Button from '~/component/Button/Button';
import Menu from '~/component/Menu/Menu';
import { Inbox, Message } from '~/component/Icon/Icon';
import Image from '~/component/Image';
import Search from '~/component/Search/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'en',
                    title: 'Tiếng Việt',
                }
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcuts',
    },
];

const MENU_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/prifile',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
        to: '/prifile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/prifile',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/prifile',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/prifile',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightToBracket} />,
        title: 'Log out',
        to: '/prifile',
        separate: true,
    },
]

function Header() {
    const currentlyLogged = true;

    const handleMenuChange = (MenuItem) => {
        console.log(MenuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* <a href={route.home}><img src={images.logo} alt="logo tiktok" width={118} height={42} /></a> */}
                <Search />

                {currentlyLogged ? (
                    <div className={cx('current-user')}>
                        <Tippy content="Upload" >
                            <Button outline iconLeft={<FontAwesomeIcon icon={faPlus} />}>Upload</Button>
                        </Tippy>
                        <Tippy content="Message" >
                            <Message />
                        </Tippy>
                        <Tippy content="Upload" >
                            <Inbox />
                        </Tippy>
                        <Menu onChange={handleMenuChange} items={MENU_USER}>
                            <Image
                                className={cx('header-avatar')}
                                src="https://vapa.vn/wp-content/uploads/2022/12/anh-dai-dien-dep-001.jpg"
                                alt="ảnh đại diện"
                            />
                        </Menu>
                    </div>
                ) : (
                    <div className={cx('action')}>
                        <Button>Upload</Button>
                        <Button primary>Login</Button>
                        <Menu onChange={handleMenuChange} items={MENU_ITEMS}>
                            <button className={cx('btn-more')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} size="xl" />
                            </button>
                        </Menu>
                    </div>
                )}
            </div>
        </header >
    );
}

export default Header;
