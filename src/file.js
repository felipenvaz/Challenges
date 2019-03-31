const fs = require('fs');
const readline = require('readline');


const getLines = file => new Promise((resolve, reject) => {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(file),
      crlfDelay: Infinity,
    });
    const lines = [];
    rl.on('line', (line) => {
      lines.push(line);
    });

    rl.on('close', () => {
      resolve(lines);
    });
  } catch (e) {
    reject(e);
  }
});

module.exports = {
  getLines,
};
