import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    ChangeEventHandler,
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    customChange? : (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    register?: UseFormRegister<FieldValues>,
    registerName? : string
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        customChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        register,
        registerName,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        customChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                {(register && registerName)
                    ? (
                        <input
                            className={cls.input}
                            type={type}
                            onFocus={onFocus}
                            // onBlur={onBlur}
                            onSelect={onSelect}
                            readOnly={readonly}
                            {...register(registerName)}
                            onChange={onChangeHandler}
                        />
                    )
                    : (
                        <input
                            ref={ref}
                            type={type}
                            onChange={onChangeHandler}
                            className={cls.input}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSelect={onSelect}
                            readOnly={readonly}
                            {...otherProps}
                        />
                    )}
                {isCaretVisible && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});
