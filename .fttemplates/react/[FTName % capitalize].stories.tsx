import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { <FTName | capitalize> } from './<FTName>';

export default {
    title: 'any/<FTName | capitalize>',
    component: <FTName | capitalize>,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof <FTName | capitalize>>;

const Template: ComponentStory<typeof <FTName | capitalize>> = (args) => <<FTName | capitalize> {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
