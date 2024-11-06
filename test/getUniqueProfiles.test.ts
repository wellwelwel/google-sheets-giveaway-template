import { describe, it, assert } from 'poku';
import { getUniqueProfiles } from '../src/helpers/profile.js';

describe('getUniqueProfiles()', () => {
  it('Extrai corretamente de URLs com variáveis de query', () => {
    const urls = [
      'https://linkedin.com/in/johndoe123',
      'https://linkedin.com/in/johndoe123/',
      'https://linkedin.com/in/',
      'https://linkedin.com/in/johndoe123?param=value',
      'https://www.linkedin.com/in/johndoe123',
      'https://www.linkedin.com/in/johndoe123/',
      'https://www.linkedin.com/in/',
      'https://www.linkedin.com/in/johndoe123?param=value',
      'www.linkedin.com/in/johndoe123',
      'www.linkedin.com/in/johndoe123/',
      'www.linkedin.com/in/',
      'www.linkedin.com/in/johndoe123?param=value',
      'linkedin.com/in/johndoe123',
      'linkedin.com/in/johndoe123/',
      'linkedin.com/in/',
      'linkedin.com/in/johndoe123?param=value',
      'http://linkedin.com/in/johndoe123',
      'http://linkedin.com/in/johndoe123/',
      'http://linkedin.com/in/',
      'http://linkedin.com/in/johndoe123?param=value',
      'http://www.linkedin.com/in/johndoe123',
      'http://www.linkedin.com/in/johndoe123/',
      'http://www.linkedin.com/in/',
      'http://www.linkedin.com/in/johndoe123?param=value',
      'https://linkedin.com/in/JOHNDOE123',
      'https://linkedin.com/in/JOHNDOE123/',
      'https://linkedin.com/in/',
      'https://linkedin.com/in/JOHNDOE123?param=value',
      'https://www.linkedin.com/in/JOHNDOE123',
      'https://www.linkedin.com/in/JOHNDOE123/',
      'https://www.linkedin.com/in/',
      'https://www.linkedin.com/in/JOHNDOE123?param=value',
      'www.linkedin.com/in/JOHNDOE123',
      'www.linkedin.com/in/JOHNDOE123/',
      'www.linkedin.com/in/',
      'www.linkedin.com/in/JOHNDOE123?param=value',
      'linkedin.com/in/JOHNDOE123',
      'linkedin.com/in/JOHNDOE123/',
      'linkedin.com/in/',
      'linkedin.com/in/JOHNDOE123?param=value',
      'http://linkedin.com/in/JOHNDOE123',
      'http://linkedin.com/in/JOHNDOE123/',
      'http://linkedin.com/in/',
      'http://linkedin.com/in/JOHNDOE123?param=value',
      'http://www.linkedin.com/in/JOHNDOE123',
      'http://www.linkedin.com/in/JOHNDOE123/',
      'http://www.linkedin.com/in/',
      'http://www.linkedin.com/in/JOHNDOE123?param=value',
      'JOHNDOE123',
      'johndoe123',
      '/JOHNDOE123',
      '/johndoe123',
      'JOHNDOE123/',
      'johndoe123 /',
      '/JOHNDOE123/',
      '/johndoe123 /',
      `
        linkedin.com/in/johndoe123
      `,
      `
        linkedin.com/in/johndoe123
        linkedin.com/in/johndoe123
      `,
      'https://www.linkedin.com/in/johndoe123?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAAA6DXC4BfNv662hcHATumhYxkw1gbL-U3VQ&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B4PMyq1NEQ4WU02oyQ62McA%3D%3D',
    ];

    assert.deepStrictEqual(getUniqueProfiles(urls), ['johndoe123']);
  });
});
