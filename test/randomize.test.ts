import { describe, it, assert } from 'poku';
import { randomize } from '../src/helpers/results.js';

describe('randomize()', () => {
  it('Retorna um array com a mesma quantidade de elementos', () => {
    const input = [1, 2, 3, 4, 5];
    const result = randomize([...input]);

    assert.strictEqual(result.length, input.length);
  });

  it('Mantém todos os elementos originais após o embaralhamento', () => {
    const input = [1, 2, 3, 4, 5];
    const result = randomize([...input]);

    assert.deepStrictEqual([...result].sort(), [...input].sort());
  });

  it('Retorna uma ordem diferente da entrada', () => {
    const input = [1, 2, 3, 4, 5];
    const result = randomize([...input]);

    assert.notStrictEqual(result.join(','), input.join(','));
  });

  it('Retorna o array inalterado quando contém zero ou um elemento', () => {
    const emptyArray: number[] = [];
    const singleElementArray = [42];

    assert.deepStrictEqual(randomize(emptyArray), []);
    assert.deepStrictEqual(randomize(singleElementArray), [42]);
  });
});
