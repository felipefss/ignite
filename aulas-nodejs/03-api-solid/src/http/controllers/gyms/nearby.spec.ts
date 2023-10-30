import request from 'supertest';
import { app } from '@/app';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user';

describe('Nearby Gyms (e2e)', () => {
  beforeAll(async () => {
    await app.ready();
  });
  afterAll(async () => {
    await app.close();
  });

  it('should be able to list nearby gyms', async () => {
    const { token } = await createAndAuthenticateUser(app, true);

    await request(app.server).post('/gyms').set('Authorization', `Bearer ${token}`).send({
      title: 'Javascript Gym',
      description: 'Some description',
      phone: '11999999999',
      latitude: 41.1928709,
      longitude: -8.5611249,
    });

    await request(app.server).post('/gyms').set('Authorization', `Bearer ${token}`).send({
      title: 'Typescript Gym',
      description: 'Some description',
      phone: '11999999999',
      latitude: 41.2615319,
      longitude: -8.7273108,
    });

    const response = await request(app.server)
      .get('/gyms/nearby')
      .query({
        latitude: 41.1928709,
        longitude: -8.5611249,
      })
      .set('Authorization', `Bearer ${token}`)
      .send();

    expect(response.statusCode).toEqual(200);
    expect(response.body.gyms).toHaveLength(1);
    expect(response.body.gyms).toEqual([expect.objectContaining({ title: 'Javascript Gym' })]);
  });
});
