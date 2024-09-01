import { test, expect } from '@playwright/test';
import { apiClient } from '../helper/apiClient';

test.describe('GitHub User API', {tag:"@userTokeneTest"} ,() => {

  test('No Token Provided - 401 Unauthorized', async () => {
    const client = await apiClient('');
    const response = await client.get('/user');
    expect(response.status()).toBe(401);
  });

  test('Invalid Token Provided - 401 Unauthorized', async () => {
    const client = await apiClient('invalid_token');
    const response = await client.get('/user');
    expect(response.status()).toBe(401);
  });

  test('Forbidden Access (Token Without Necessary Permissions) - 403 Forbidden', async () => {
    const client = await apiClient(process.env.GITHUB_TOKEN_WITHOUT_PERMISSION);
    const response = await client.get('/user');
    console.log("response", response);
    expect(response.status()).toBe(403);
  });

  test('Get User With Valid Token - 200 OK', async () => {
    const client = await apiClient(process.env.GITHUB_TOKEN);
    const response = await client.get('/user');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.login).toBeTruthy();
  });

  test('Update User Bio With Valid Token - 200 OK', async () => {
    const client = await apiClient(process.env.GITHUB_TOKEN);
    const response = await client.patch('/user', {
      data: {
        bio: 'QA Automation Engineer.'
      }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.bio).toBe('QA Automation Engineer.');
  });

});
