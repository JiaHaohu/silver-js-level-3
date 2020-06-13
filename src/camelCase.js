/**
 * This function turns the specified string into camel cased identifier. Camel case (stylized
 * as camelCase; also known as camel caps or more formally as medial capitals) is the practice
 * of writing phrases such that each word or abbreviation in the middle of the phrase begins
 * with a capital letter, with no intervening spaces or punctuation. For example.
 *
 * - `safe hTML` -> `safeHtml`
 * - `escape HTML entities` -> `escapeHtmlEntities`
 *
 * The identifier should only contains english letters (`A` to `Z`, including upper and
 * lower case), digits (`0` to `9`) and underscore (`_`). Other characters will be treated
 * as delimiters. For example.
 *
 * - `safe+html` -> `safeHtml`
 *
 * @param {String} string The input string.
 */
export default function camelCase (string) {
  // TODO:
  //   Please implement the function.
  // <-start-
  if (string === null || string === undefined) {
    return string;
  }

  const partArray = useRegexSplitString(string);

  let result = '';

  for (let index = 0; index < partArray.length; index++) {
    const element = partArray[index];
    if (index === 0) {
      result += element.toLowerCase();
    } else {
      result += toCamelCaseFormat(element.toLowerCase());
    }
  }

  return result;
  // --end-->
}

// TODO:
//   You can add additional code here if you want
// <-start-
function useRegexSplitString (string) {
  const re = /[A-Za-z0-9]+/g;
  return string.match(re);
}

function toCamelCaseFormat (string) {
  const res = string.slice(1);
  return string[0].toUpperCase() + res;
}

// --end-->
