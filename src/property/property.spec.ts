import { PropertyRepository } from './property.repository';

describe('Property', () => {
  it('should be defined', () => {
    expect(new PropertyRepository()).toBeDefined();
  });
});
