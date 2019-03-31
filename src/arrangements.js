class CombinationNode {
  constructor(value, add) {
    this.value = value;
    this.children = [];
    for (let i = 0; i < add.length; i++) {
      this.children.push(new CombinationNode([...value, add[i]], add.slice(i + 1)));
    }
  }

  getValues() {
    return this.children.reduce((acc, c) => ([...acc, ...c.getValues()]), [this.value]);
  }
}

const getCombinations = values => (new CombinationNode([], values)).getValues().filter(v => v.length > 0);

module.exports = {
  getCombinations,
};
