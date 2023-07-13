import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import styles from './image.module.scss';

function Image({ src = '', alt = ' ', fallback: customFallback = images.NoImage, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wraper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            ref={ref}
            onError={handleError}></img>
    );
}

Image.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
    className: PropTypes.string,
};

export default forwardRef(Image);
