/**
 * Replace HTML entity for non-breaking space (&nbsp;) in string with space character
 * @param {string} str String with &nbsp;
 * @return {string} String with &nbsp; replaced with space character
 */
export const removeNBSP = (str) => str.replace(/&nbsp;/, ' ')
