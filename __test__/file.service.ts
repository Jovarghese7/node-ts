import fs from 'fs';

import path from 'path';

// const filepath = path.join(__dirname,'data.json');

export default function readFile(filepath: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      try {
        resolve(JSON.parse(data));
      } catch (error) {
        reject(error);
      }
    });
  });
}
