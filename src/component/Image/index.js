import { forwardRef, useState } from 'react';
import classNames from "classnames";

import images from "~/assets/images";
import styles from "./image.module.scss";


function Image({ src = '', alt = ' ', fallback: customFallback = images.NoImgae, className, ...props }, ref) {
    const [fallback, setFallback] = useState('')

    const hanleError = () => {
        setFallback(customFallback)
    }

    return (
        <img className={classNames(styles.wraper, className)} src={fallback || src} alt={alt} {...props} ref={ref} onError={hanleError} ></img>
    );
}

export default forwardRef(Image);