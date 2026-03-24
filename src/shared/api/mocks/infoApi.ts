import { mockInfo } from './info.mock';
import { IMockInfo } from './model/type';

export const fetchInfo = (n?: number): Promise<IMockInfo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!n) {
        resolve(mockInfo);
      }
      resolve(mockInfo.slice(0, n));
    }, 1000);
  });
};
