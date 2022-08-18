const dayjs = require('dayjs')
require('dayjs/locale/uk')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in UK', () => {
  dayjs.locale('uk')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Доброго ранку')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Доброго ранку')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'Доброго ранку custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Добрий день')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Добрий день')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'Добрий день custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Добрий вечір')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Добрий вечір')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Добрий вечір custom suffix'
  )
})
