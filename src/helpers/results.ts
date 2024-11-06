/**
 * Fisher-Yates é um algoritmo de embaralhamento que garante uma ordem aleatória imparcial.
 * O algoritmo percorre de forma eficiente a lista trocando cada item por outro item aleatório.
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
 * Imprime os 100 primeiros itens sorteados, onde os três primeiros são os vencedores.
 */
export const writeResults = async (results: string[]) => {
  const winners = results.slice(0, 3);

  console.log('🎖️ Vencedores:');
  console.log(
    winners.map((winner) => `https://www.linkedin.com/in/${winner}/`)
  );
  console.log();

  console.log(
    'Caso algum vencedor não responda à mensagem enviada em até um dia corrido,\no próximo participante será escolhido como novo vencedor em seu lugar,\nonde a mesma regra se aplica recursivamente:'
  );
  console.log(results.slice(0, 100));
  console.log(' * Apenas os 100 primeiros são exibidos.');
  console.log();
};
