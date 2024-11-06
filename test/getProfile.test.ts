import { describe, it, assert } from 'poku';
import { getProfile } from '../src/helpers/profile.js';

describe('getProfile()', () => {
  it('Extrai o perfil corretamente de uma URL completa', () => {
    const url = 'https://linkedin.com/in/johndoe123';
    const result = getProfile(url);

    assert.strictEqual(result, 'johndoe123');
  });

  it('Extrai o perfil corretamente mesmo com barra final', () => {
    const url = 'https://linkedin.com/in/johndoe123/';
    const result = getProfile(url);

    assert.strictEqual(result, 'johndoe123');
  });

  it('Remove caracteres especiais e mantém apenas letras e números em minúsculo', () => {
    const url = 'https://linkedin.com/in/John-Doe123';
    const result = getProfile(url);

    assert.strictEqual(result, 'john-doe123');
  });

  it('Retorna string vazia para URL sem perfil', () => {
    const url = 'https://linkedin.com/in/';
    const result = getProfile(url);

    assert.strictEqual(result, '');
  });

  it('Extrai corretamente de URLs com variáveis de query', () => {
    const url = 'https://linkedin.com/in/johndoe123?param=value';
    const result = getProfile(url);

    assert.strictEqual(result, 'johndoe123');
  });
});
