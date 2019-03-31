const fs = require('fs');
const { getLines } = require('../file');

/**
  INCOMPLETE
*/

const file = `${__dirname}/files/pancake-small-practice.in`;
const outputfile = `${__dirname}/files/pancake-small-practice.out`;

/* const rows = [
  '---+-++- 3', // 3
  '+++++ 4', // 0
  '-+-+- 4', // IMPOSSIBLE
  '+++ 3', // 0
  '-+++- 3', //
  '++--+-+-- 3', //
]; */

(async () => {
  const rows = // (await getLines(file)).slice(1);
   ['-++++++++- 2'];

  const results = [];
  const sortPosibleMoves = (a, b) => a.pos - b.pos;
  const filterMoves = (moves, strPancakes) => pm => (!moves[strPancakes] || !moves[strPancakes].find(m => m.pos === pm.pos));
  const flip = (pancakes, k, pos) => {
    const result = [...pancakes];
    for (let m = pos; m < pos + k; m++) {
      result[m] = result[m] === '+' ? '-' : '+';
    }
    return result;
  };

  rows.forEach((row) => {
    const [strPancakes, strK] = row.split(' ');
    const k = parseInt(strK, 10);
    let pancakes = [...strPancakes];
    const moves = {};
    let noMoreMoves = false;
    let moveCount = 0;
    while (!noMoreMoves && pancakes.some(p => p === '-')) {
      const currStrPancakes = pancakes.join('');
      let possibleMoves = [];
      let maxBias = 0;
      for (let i = 0; i <= pancakes.length - k; i++) {
        let bias = 0;
        for (let m = i; m < (i + k); m++) {
          if (pancakes[m] === '-') bias += 1;
        }
        possibleMoves.push({ bias, pos: i });
        maxBias = Math.max(maxBias, bias);
      }
      possibleMoves = possibleMoves
        .filter(filterMoves(moves, currStrPancakes))
        .filter(m => m.bias === maxBias)
        .sort(sortPosibleMoves);

      if (possibleMoves.length === 0) {
        noMoreMoves = true;
      } else {
        const chosenMove = possibleMoves[0];
        if (!moves[currStrPancakes]) moves[currStrPancakes] = [];

        pancakes = flip(pancakes, k, chosenMove.pos);
        moves[currStrPancakes].push({ pos: chosenMove.pos, result: [...pancakes].join('') });
        moveCount += 1;
      }
    }

    /* Object.keys(moves).forEach((strP) => {
      moves[strP].forEach((move) => {
        if (moves[move.result]) {
          moves[move.result] = moves[move.result].filter(m => m.result === strP);
        }
      });
    });

    moveCount = Math.min(moveCount, Object.values(moves).reduce((acc, m) => acc + m.length, 0)); */
    results.push(`Case #${results.length + 1}: ${!noMoreMoves ? moveCount : 'IMPOSSIBLE'}`);
  });

  const content = results.join('\n');
  fs.writeFileSync(outputfile, content);
  console.log(content);
})();
