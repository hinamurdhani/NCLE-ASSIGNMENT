import { request } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export const apiClient = async (token) => {
  const requestContext = await request.newContext({
    baseURL: 'https://api.github.com',
    extraHTTPHeaders: {
      'Authorization': token ? `bearer ${token}`: '',
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
    },
  });
  return requestContext;
};
