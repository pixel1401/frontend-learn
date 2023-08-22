import axios from 'axios';
import fetchMock from 'jest-fetch-mock';
import { getData, delay, getFetch } from './fetch';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetch test Data', () => {
    let response : any;
    beforeEach(() => {
        response = {
            data: [
                {
                    userId: 1,
                    id: 1,
                    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
                },
                {
                    userId: 1,
                    id: 2,
                    title: 'qui est esse',
                    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
                },
                {
                    userId: 1,
                    id: 3,
                    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
                    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
                },
            ],
        };
    });
    test('first', async () => {
        mockedAxios.get.mockResolvedValue(response);
        const data = await getData();

        expect(mockedAxios.get).toBeCalledTimes(1);
        expect(data).toEqual(['1', '2', '3']);
    });

    test('fetch test', async () => {
        // fetchMock.mockResponseOnce(JSON.stringify(response.data));
        fetchMock.mockResolvedValue(response.data);
        const result = await getFetch();
        const actualFirstThree = result.slice(0, 3);
        expect(actualFirstThree).toEqual(['1', '2', '3']);
    });
});
