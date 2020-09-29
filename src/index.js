module.exports = function check(str, bracketsConfig) {
  // your solution
  const string = str;
  const brConf = bracketsConfig;
  const strArray = string.split('');

  function isEqualWithOpposite(str) {
    // console.log(str);
    const result = brConf.filter((i) => i.includes(str))[0].filter((i) => i === str).length;
    return result === 2;
  }

  function elementsAreEqual(a, b) {
    return a === b;
  }

  function returnOpposite(str) {
    const result = brConf.filter((i) => i.includes(str))[0].filter((i) => i !== str);
    return result[0];
  }

  function ifBracketIsOpen(str) {
    const result = brConf.filter((i) => i.includes(str))[0][0] === str;
    return result;
  }



  function bracketSolver(arr) {
    let boolResult = true;
    if (arr.length === 0) {
      boolResult = true;
      return boolResult;
    }
    function setFalse(str) {
      boolResult = boolResult === false ? false : str;
    }

    let count = 0;
    let innerChunk = '';
    let firstElementIndex = 0;
    let firstElement = arr[firstElementIndex];
    let flag = isEqualWithOpposite(firstElement);
    let lastElementIndex = firstElementIndex;

    let returnValue = arr.map((i, ind, ar) => {
      if (ind > firstElementIndex && ind <= lastElementIndex && flag) {
        return i;
      } else {

        if (flag) {
          lastElementIndex = arr.lastIndexOf(firstElement);
          if (lastElementIndex === firstElementIndex || arr.length % 2 !== 0) {
            setFalse(false);
          } else {
            innerChunk = arr.slice(firstElementIndex + 1, lastElementIndex);
            if (innerChunk.length === 0) {
              setFalse(true);
            } else if (innerChunk.length === 1) {
              setFalse(false);
            }
            else {
              setFalse(bracketSolver(innerChunk));
              innerChunk = '';
              return i;
            }
          }
        } else {

          if (arr.length === 0) {
            setFalse(true);
          } else if (arr.length % 2 !== 0) {
            setFalse(false);
          } else {
            if (ind === firstElementIndex) {
              if (ifBracketIsOpen(i)) {
                count += 1;
                setFalse(true);
              } else {
                setFalse(false);
              }
            };
            if (ind !== firstElementIndex) {
              if (i === returnOpposite(firstElement)) {
                count -= 1;
                if (count === 0) {
                  setFalse(bracketSolver(innerChunk.split('')));
                  innerChunk = '';
                  if (ind < arr.length - 1) {
                    firstElementIndex = ind + 1;
                    firstElement = arr[firstElementIndex];
                    flag = isEqualWithOpposite(firstElement);
                  }
                } else {
                  innerChunk += i;
                }
              } else if (i === firstElement) {
                count += 1;
                innerChunk += i;
              } else {

                if (count === 0) {
                  firstElementIndex === ind;
                  firstElement = i;
                } else {
                  innerChunk += i;
                }
              }
            }
          }
        }

      }


    })
    return boolResult;
  }

  return bracketSolver(str.split(''));
}
