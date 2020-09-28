module.exports = function check(str, bracketsConfig) {
  // your solution
  const string = str;
  const brConf = bracketsConfig;
  const strArray = string.split('');

  function isEqualWithOpposite(str) {
    const result = brConf.filter((i) => i.includes(str))[0].filter((i) => i === str).length;
    return result === 2;
  }

  function elementsAreEqual(a, b) {
    return a === b;
  }

  function returnOpposite(str) {
    const result = brConf.filter((i) => i.includes(str))[0].filter((i) => i !== str);
    // console.log(result)
    return result[0];
  }

  function ifBracketIsOpen(str) {
    const result = brConf.filter((i) => i.includes(str))[0][0] === str;
    return result;
  }

  function bracketSolver(arr) {
    let lastIndex = 0;
    let count = 0;
    let innerChunk = '';
    let firstElement = arr[0];
    let lastElement = '';
    return arr.map((i, index, arry) => {
      if (arry.length < 2) {
        return false;
      }
      console.log(`i: ${i}; index: ${index}; array: ${arry}`);

      if (index === 0 && isEqualWithOpposite(i)) {
        lastIndex = arr.lastIndexOf(i);
        count += 1;
        return true;
      }
      if (index !== 0 && isEqualWithOpposite(firstElement) && index !== lastIndex) {
        count += 1;
        innerChunk += i;
        return true;
      }
      if (index !== 0 && isEqualWithOpposite(firstElement) && index === lastIndex) {
        count += 1;
        const n = innerChunk;
        console.log(`48: ${n}`);
        innerChunk = '';
        if (n.split('').length > 0) {
          return bracketSolver(n.split(''));
        } else {
          return true;
        }

      }
      if (index !== 0 && isEqualWithOpposite(firstElement) && index === arry.length - 1 && (count % 2 !== 0)) {

        return false;
      }

      if (index === 0 && ifBracketIsOpen(i)) {
        count += 1;
        console.log(`35 count: ${count}`);
        return true;
      }

      else if (index === 0 && !ifBracketIsOpen(i)) {
        console.log(`40`);
        return false;
      };
      if (index !== 0 && (i[0] === firstElement)) {
        count += 1;
      }
      else if (index !== 0 && (i[0] === returnOpposite(firstElement))) {

        count -= 1;
        console.log(`47 count: ${count}`);
        if (count === 0) {
          const retV = innerChunk;
          innerChunk = '';
          if (index !== arry.length - 1) {
            firstElement = arry[index + 1];
            if (!ifBracketIsOpen(firstElement)) {
              return false;
            }
          }

          if (retV.length === 0) {
            return true;
          } else {
            return bracketSolver(retV.split(''));
          }

        }
        else if (count > 0) {
          innerChunk += i;
        } else {
          console.log(`58`);
          return false;
        }
      }
      if (index === arry.length - 1 && (i !== returnOpposite(firstElement))) {
        console.log(`62 i: ${i}`);
        console.log(`62': ${returnOpposite(firstElement)}`);
        console.log(i !== returnOpposite(firstElement));

        console.log(`63`);
        return false;

      }
      if (count === 0 && (i === firstElement) && index !== 0) {

        count += 1;
      }
      if (index !== 0) {
        return i;
      }

    })

  }

  let ss = bracketSolver(str.split(''));
  console.log(`ss: ${ss}`);
  ss = ss.filter((i) => {
    console.log(i);
    console.log(i === false);
    return (i !== true);
  });
  console.log(`ss: ${ss}`);
  return ss.length === 0;
  console.log(bracketSolver(str.split('')));
}
