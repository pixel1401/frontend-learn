import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import testImg from 'shared/assets/test/storybook.jpg';
import { CommentCard } from './CommentCard';
import { Comment } from '../../model/types/comment';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

const commentData: Comment = {
    id: '1',
    text: 'Text test',
    user: {
        id: '1',
        username: 'Erzhan',
        avatar: testImg,
    },
};

export const Primary = Template.bind({});
Primary.args = {
    isLoading: false,
    comment: commentData,
};

export const Dark = Template.bind({});
Dark.args = {
    comment: commentData,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
