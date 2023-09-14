import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import avatar from 'shared/assets/test/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    data: {
        avatar,
    },
};

export const Dark = Template.bind({});
Dark.args = {
    data: {
        avatar,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Lodaing = Template.bind({});
Lodaing.args = {
    isLoading: true,
};
Lodaing.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    error: 'Error',
};
Error.decorators = [ThemeDecorator(Theme.DARK)];
