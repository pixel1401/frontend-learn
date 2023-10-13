import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    AddCommentFormActions,
    AddCommentFormReducer,
} from 'features/AddCommentForm/model/addCommentForm/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './AddCommentForm.module.scss';

const reducers : ReducersList = {
    addCommentForm: AddCommentFormReducer,
};

const schema = z.object({
    text: z.string({ description: 'Description' }).min(5, 'Must be 5 or more characters long'),
});
type FormType = z.infer<typeof schema>;

interface AddCommentFormProps {}
export const AddCommentForm : FC<AddCommentFormProps> = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormType>({
        resolver: zodResolver(schema),
        mode: 'onTouched',
    });

    const fetchComment = (e : FormType) => {
        // dispatch(AddCommentFormActions.setText(e.text));
        console.log(e);
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                <form onSubmit={handleSubmit(fetchComment)}>
                    <Input register={register} registerName="text" placeholder="Enter your text" />
                    <Button type="submit">Submit122  </Button>
                </form>
            </div>
        </DynamicModuleLoader>

    );
};
