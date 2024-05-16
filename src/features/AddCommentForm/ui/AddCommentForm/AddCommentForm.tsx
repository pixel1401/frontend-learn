import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    AddCommentFormActions,
    AddCommentFormReducer,
} from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';

const reducers : ReducersList = {
    addCommentForm: AddCommentFormReducer,
};

const schema = z.object({
    text: z.string({ description: 'Description' }).min(5, 'Must be 5 or more characters long'),
});
type FormType = z.infer<typeof schema>;
interface AddCommentFormProps {
    onSendComment: (text :string) => void,
}
export const AddCommentForm : FC<AddCommentFormProps> = ({ onSendComment }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormType>({
        resolver: zodResolver(schema),
        mode: 'onTouched',
    });

    const fetchComment = async (e : FormType) => {
        dispatch(AddCommentFormActions.setText(e.text));
        onSendComment(e.text);
        reset();
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                <form onSubmit={handleSubmit(fetchComment)} className={classNames(cls.AddCommentForm, {}, [])}>
                    <Input
                        register={register}
                        registerName="text"
                        placeholder="Enter your text"
                        className={cls.input}
                    />
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        type="submit"
                    >
                        {t('Отправить')}
                    </Button>
                </form>
            </div>
        </DynamicModuleLoader>

    );
};
