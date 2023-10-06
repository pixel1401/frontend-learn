import { useEffect } from 'react';

function useInitialEffect(callback : Function) : void {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useInitialEffect;
