import { styleText } from 'node:util';

const italic = (text: string) => styleText('italic', text);

const bold = (text: string) => styleText('bold', text);

const formatResults = (results: string[]) =>
  styleText(
    'green',
    results
      .map((result) =>
        result.includes(' ')
          ? `  - ${result} — Link Inválido 🔍`
          : `  - https://www.linkedin.com/in/${result}/`
      )
      .join('\n')
  );

/**
 * Fisher-Yates is a shuffling algorithm that guarantees an impartial random order.
 * The algorithm efficiently goes through the list swapping each item for another random item.
 */
export const randomize = <T>(list: T[]): T[] => {
  const listLength = list.length - 1;

  for (let current = listLength; current > 0; current--) {
    const random = Math.floor(Math.random() * (current + 1));

    [list[current], list[random]] = [list[random], list[current]];
  }

  return list;
};

/**
 * Print out the first 100 items drawn, where the first three are the winners.
 */
export const writeResults = async (
  results: string[],
  winnersNumber: number = 3
) => {
  const winners = results.slice(0, winnersNumber);
  const firstHundred = results.slice(0, 100);

  console.log(bold('🏅 Vencedores:\n'));
  console.log(formatResults(winners));
  console.log();

  console.log(
    '💡 Caso algum vencedor não responda à mensagem enviada em até um dia corrido, o próximo participante será escolhido como novo vencedor em seu lugar, onde a mesma regra se aplica recursivamente:\n'
  );
  console.log(formatResults(firstHundred));
  console.log(italic('\n* Apenas os 100 primeiros são exibidos.'));
  console.log();
};
