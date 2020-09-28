module.exports = function check(str, bracketsConfig) {
  // your solution
  const string = str;
  const brConf = bracketsConfig;
  let nextOption = [];

  function ifIsOpen(bracket) {
    console.log(`8: ${bracket}`);
    let returnValue = '';
    let a = brConf.filter((i) => {
      console.log(`11: ${i}`);
      console.log(`12: ${i.includes(bracket)}`);
      return i.includes(bracket);
    })[0][0] === bracket;
    console.log(`15: ${a}`);
    return a;
  }

  function getOposite(bracket) {
    let returnValue = '';
    returnValue = brConf.filter((i) => i.includes(bracket)).filter((i) => i !== bracket)[0];
    return returnValue;
  }

  function getAllOpenBrackets() {

  }

  function nextStepOptions(bracket = '') {

    let returnArray = [];
    if (bracket === '') {
      brConf.map((i) => {
        console.log(`27: ${i}`);
        console.log(`28: ${i[0]}`);
        returnArray.push(i[0]);
        console.log(`30: ${returnArray}`);
        return i;
      })
    } else {
      brConf.map((i) => {
        console.log(`35: ${i}`);
        console.log(`36: ${i[0]}`);
        returnArray.push(i[0]);
        console.log(`38: ${returnArray}`);
        return i;
      });
      returnArray.push(getOposite(bracket));
    };
    console.log(`43: ${returnArray}`);
    console.log(`44: ${returnArray instanceof Array}`);
    return returnArray;
  };

  nextOption.push(nextStepOptions());
  console.log(`48: ${nextOption}`);
  console.log(`49: ${str}`);
  let strArray = str.split('');
  console.log(`50: ${strArray}`);
  strArray = strArray.map((i, index, arr) => {
    console.log(`54: ${i}; ${typeof i}`);
    console.log(`53: ${nextOption}`);
    console.log(nextOption.length);
    console.log(`56: ${nextOption[nextOption.length - 1]}; ${nextOption[nextOption.length - 1] instanceof Array}`);
    console.log(`55: ${nextOption[nextOption.length - 1].map((ii, index) => {
      console.log(`66: ${ii}`);
      console.log(`index: ${index}`);
      console.log(`68: ${ii.includes(i)}`);
      return i;
    })}`);
    if (nextOption[nextOption.length - 1].filter((ii) => ii.includes(i)).length !== 0) {
      if (ifIsOpen(i)) {
        console.log(`${i} is open`);
        nextOption.push(nextStepOptions(i));
        console.log(`69: ${nextOption}`);
      } else {
        console.log(`${i} is not open`)
        nextOption.pop();
      }
      return true;
    } else {
      return false;
    }
    return i;
  });
  console.log(`80: ${strArray}`);
  console.log(`87: ${nextOption}`);
  console.log(`87: ${nextOption.length}`);
  nextOption.map((i) => {
    console.log(i);
    return i;
  });
  return strArray.filter((i) => {
    // console.log(`88: ${i}`);
    // console.log(`89: ${i === true}`);
    return (i === true);
  }).length === strArray.length && nextOption.length === 1;
}
