const fs = require('fs');
const { getLines } = require('../file');

const file = `${__dirname}/files/pancake-large-practice.in`;
const outputfile = `${__dirname}/files/pancake-large-practice.out`;

const flip = (pancakes, k, pos) => {
  const result = [...pancakes];
  for (let m = pos; m < pos + k; m++) {
    result[m] = result[m] === '+' ? '-' : '+';
  }
  return result;
};

class PancakeLineNode {
  constructor(pancakeLineStr, k) {
    this.pancakeLine = [...pancakeLineStr];
    this.pancakeLineStr = pancakeLineStr;
    this.k = k;
  }

  getMoves(state = {}, nextMoveCount = 0) {
    if (state[this.pancakeLineStr] !== undefined && state[this.pancakeLineStr] <= nextMoveCount) return state;

    let newState = { ...state };
    newState[this.pancakeLineStr] = nextMoveCount;
    if (this.pancakeLineStr.indexOf('-') < 0) return newState;

    for (let i = 0; i <= this.pancakeLine.length - this.k; i++) {
      if (this.pancakeLineStr.slice(i, i + this.k).indexOf('-') < 0) continue;
      const newPancakeLine = flip(this.pancakeLine, this.k, i);
      const newPancakeLineStr = newPancakeLine.join('');

      newState = (new PancakeLineNode(newPancakeLineStr, this.k)).getMoves(newState, nextMoveCount + 1);
    }

    return newState;
  }
}

(async () => {
  const rows = (await getLines(file)).slice(1);
  // ['-++++++++- 2'];
  // ['+++++ 4'];
  const start = new Date();
  const results = [];

  rows.forEach((row) => {
    const [strPancakes, strK] = row.split(' ');
    const k = parseInt(strK, 10);
    const initialPancakeLine = new PancakeLineNode(strPancakes, k);
    const moves = initialPancakeLine.getMoves();

    const resultStr = [...strPancakes].map(() => '+').join('');

    results.push(`Case #${results.length + 1}: ${moves[resultStr] !== undefined ? moves[resultStr] : 'IMPOSSIBLE'}`);
    console.log(results[results.length - 1]);
  });

  console.log(`Seconds: ${((new Date()) - start) / 1000}`);
  const content = results.join('\n');
  fs.writeFileSync(outputfile, content);
})();
