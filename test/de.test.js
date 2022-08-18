const dayjs = require('dayjs')
require('dayjs/locale/de')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in DE', () => {
  dayjs.locale('de')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Guten Morgen')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Guten Morgen')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'Guten Morgen custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Guten Tag')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Guten Tag')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'Guten Tag custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Guten Abend')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Guten Abend')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Guten Abend custom suffix'
  )
})
