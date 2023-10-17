import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    ChangeEventHandler,
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange? : (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    register?: UseFormRegister<any>,
    registerName? : string
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        // customChange,
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
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlurCustome = () => {
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
                            {...register(registerName, {
                                onBlur(event) {
                                    onBlurCustome();
                                },
                            })}
                            type={type}
                            className={cls.input}
                            onFocus={onFocus}
                            onSelect={onSelect}
                            readOnly={readonly}
                            onChange={onChangeHandler}
                            // onBlur={}
                        />
                    )
                    : (
                        <input
                            ref={ref}
                            type={type}
                            onChange={onChangeHandler}
                            className={cls.input}
                            onFocus={onFocus}
                            onBlur={onBlurCustome}
                            onSelect={onSelect}
                            readOnly={readonly}
                            value={value}
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
