import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileReducer } from 'features/EditableProfileCard/model/slice/profile';
import { userEvent } from '@storybook/testing-library';
import { $api } from 'shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';

const profile : Profile = {
    id: '1',
    first: 'Erzhan',
    lastname: 'Admin',
    age: 22,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://source.unsplash.com/random',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1' },
        },
    },
    asyncReducers: {
        profile: ProfileReducer,
    },
};

describe('Feature: EditableProfileCard', () => {
    test('Edit Btn show', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        expect(screen.getByTestId('EditableProfileCardHeader.Title.Header')).toBeInTheDocument();
        expect(screen.getByTestId('EditableProfileCardHeader.EditButton')).toBeInTheDocument();
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
    });

    test('Cancel Btn show', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'Erzhan');
        await userEvent.type(screen.getByTestId('ProfileCard.LastName'), 'Siman');

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('Erzhan');
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('Siman');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));
        expect(screen.getByTestId('EditableProfileCardHeader.EditButton')).toBeInTheDocument();
    });

    test('Send Put', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(mockPutReq).toHaveBeenCalled();
    });
});
