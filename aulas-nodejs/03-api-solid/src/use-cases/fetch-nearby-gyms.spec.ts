import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository';
import { expect, describe, it, beforeEach } from 'vitest';
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms';

let gymsRepository: InMemoryGymsRepository;
let sut: FetchNearbyGymsUseCase;

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new FetchNearbyGymsUseCase(gymsRepository);
  });

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      latitude: 41.1928709,
      longitude: -8.5611249,
      description: null,
      phone: null,
    });

    await gymsRepository.create({
      title: 'Far Gym',
      latitude: 41.2615319,
      longitude: -8.7273108,
      description: null,
      phone: null,
    });

    const { gyms } = await sut.execute({
      userLatitude: 41.1928709,
      userLongitude: -8.5611249,
    });

    expect(gyms).toHaveLength(1);
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })]);
  });
});
