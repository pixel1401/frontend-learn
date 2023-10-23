import { useCallback, useRef } from 'react';

export const useThrottle = (callback : (...args : any[])=> any, delay:number = 500) => {
    const ref = useRef<boolean>(false);
    return useCallback((...args: any[]) => {
        if (!ref.current) {
            callback(...args);
            ref.current = true;
            setTimeout(() => {
                ref.current = false;
            }, delay);
        }
    }, [callback, delay]);
};
