import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import cls from './AddCommentForm.module.scss';

const schema = z.object({
    text: z.string({ description: 'Description' }).min(5, 'Must be 5 or more characters long'),
});

interface AddCommentFormProps {}
export const AddCommentForm : FC<AddCommentFormProps> = () => {
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    return (
        <div>
            <form onSubmit={handleSubmit((d) => console.log(d))}>
                <Input register={register} registerName="text" />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};
