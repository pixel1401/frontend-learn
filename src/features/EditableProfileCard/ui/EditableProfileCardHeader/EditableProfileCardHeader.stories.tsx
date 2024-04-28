import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'any/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
    },
} as ComponentMeta<typeof EditableProfileCardHeader>;
const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
