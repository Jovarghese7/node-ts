import fs from 'fs';
import readFile from './file.service';

//mock fs module
jest.mock('fs', () => ({
  readFile: jest.fn(),
}));

//mock file path
const mockFilePath = './data.json';

//replace file path in files/m

jest.mock('path', () => ({
  join: jest.fn(() => mockFilePath),
}));

describe('file service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should readd data from file', async () => {
    //mock readfile behaviour
    (fs.readFile as unknown as jest.Mock).mockImplementation(
      (path, encoding, callback) => {
        callback(null, JSON.stringify({ name: 'jo', age: 20 }));
      }
    );

    const result = await readFile(mockFilePath);
    console.log(result);

    expect(result).toEqual({ name: 'jo', age: 20 });
  });
});
