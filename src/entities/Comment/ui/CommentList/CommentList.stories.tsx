import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import testImg from 'shared/assets/test/storybook.jpg';
import { CommentList } from './CommentList';
import { Comment } from '../../model/types/comment';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const commentData: Comment[] = [
    {
        id: '1',
        text: 'Text test',
        user: {
            id: '1',
            username: 'Erzhan',
            avatar: testImg,
        },
    },
    {
        id: '2',
        text: 'Text test number 2',
        user: {
            id: '2',
            username: 'User',
            avatar: testImg,
        },
    },
];

export const Primary = Template.bind({});
Primary.args = {
    comments: commentData,
};

export const Dark = Template.bind({});
Dark.args = {
    comments: commentData,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
