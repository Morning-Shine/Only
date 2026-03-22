import { mockInfo } from './info.mock';
import { IMockInfo } from './model/type';

export const fetchInfo = (): Promise<IMockInfo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockInfo);
    }, 1000);
  });
};
