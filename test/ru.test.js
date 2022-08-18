const dayjs = require('dayjs')
require('dayjs/locale/ru')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in RU', () => {
  dayjs.locale('ru')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Доброе утро')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Доброе утро')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'Доброе утро custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Добрый день')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Добрый день')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'Добрый день custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Добрый вечер')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Добрый вечер')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Добрый вечер custom suffix'
  )
})
