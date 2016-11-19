/**
 * @global
 */

/**
 * Capitalize the first letter of a string.
 *
 * @param  {string} string the string to be capitalized
 */
const capitializeFilter = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
)

export default capitializeFilter
