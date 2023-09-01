import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { CounterActions } from '../model/slice/counter';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter : FC = () => {
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const increment = () => dispatch(CounterActions.increment());
    const dicrement = () => dispatch(CounterActions.decrement());
    return (
        <>
            <h1 data-testid="value">{value}</h1>
            <Button data-testid="increment" onClick={increment}>Intrment</Button>
            <Button data-testid="decrement" onClick={dicrement}>Dicrement</Button>
        </>
    );
};
