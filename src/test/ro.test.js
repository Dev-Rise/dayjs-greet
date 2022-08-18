const dayjs = require('dayjs')
require('dayjs/locale/ro')

const greetPlugin = require('../index')

dayjs.extend(greetPlugin)

it('Greet in RO', () => {
  dayjs.locale('ro')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Bună dimineața')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Bună dimineața')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'Bună dimineața custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Bună ziua')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Bună ziua')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'Bună ziua custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Bună seara')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Bună seara')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Bună seara custom suffix'
  )
})
