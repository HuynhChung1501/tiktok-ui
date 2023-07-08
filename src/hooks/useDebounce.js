import { useState, useEffect } from 'react';

//useDebounce dùng để sau sau 1 khoảng thời gian thì nó mới set giá trị rồi trả về
// dùng trong những trường hợp làm 1 việc gì đấy liên tục 

function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const hanlder = setTimeout(() => {
            setDebounce(value)
        }, delay);

        return () => clearTimeout(hanlder)
    }, [value, delay])

    return debounce;
}

export default useDebounce;