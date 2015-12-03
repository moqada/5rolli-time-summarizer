/**
 * to Int
 *
 * @param {*} num num
 * @return {Number}
 */
function toInt(num) {
  const parsed = parseInt(num, 10);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed;
}

/**
 * @typedef {Object} Time
 *
 * @property {number} es50 50% estimated time (minutes)
 * @property {number} es90 90% estimated time (minutes)
 * @property {number} spent spent time (minutes)
 */

/**
 * @typedef {Object} TimeSummary
 *
 * @property {number} es50 Sum of 50% estimated time (minutes)
 * @property {number} es90 Sum of 90% estimated time (minutes)
 * @property {number} spent Sum of spent time (minutes)
 * @property {number} buffer Source of buffer time (minutes^2)
 * @property {number} es Calculated estimated time (minutes)
 */

/**
 * Summarize times
 *
 * @param {Time[]} times time list
 * @return {TimeSummary}
 */
export default function summarizer(times) {
  const res = times.reduce((summary, time) => {
    const es50 = toInt(time.es50);
    const es90 = toInt(time.es90);
    return Object.assign({}, summary, {
      es50: summary.es50 + es50,
      es90: summary.es90 + es90,
      spent: summary.spent + toInt(time.spent),
      buffer: summary.buffer + Math.pow(es90 - es50, 2)
    });
  }, {
    es: 0,
    es50: 0,
    es90: 0,
    buffer: 0,
    spent: 0
  });
  return Object.assign({}, res, {
    es: res.es50 + parseInt(Math.sqrt(res.buffer), 10)
  });
}
