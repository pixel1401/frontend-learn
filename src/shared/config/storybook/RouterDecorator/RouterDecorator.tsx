import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (StoryComponent: Story) => (

    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>

);
