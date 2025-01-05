const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  // Преобразуем строку в число
  const activity = parseFloat(sampleActivity);

  // Проверяем, что значение корректное
  if (isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) return false;

  // Вычисляем константу распада
  const k = 0.693 / HALF_LIFE_PERIOD;

  // Вычисляем возраст находки
  const age = Math.log(MODERN_ACTIVITY / activity) / k;

  // Возвращаем округленный возраст
  return Math.ceil(age);
}

module.exports = {
  dateSample
};
