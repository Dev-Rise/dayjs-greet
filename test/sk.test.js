const dayjs = require('dayjs')
require('dayjs/locale/sk')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in SK', () => {
  dayjs.locale('sk')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Dobré ráno')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Dobré ráno')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'Dobré ráno custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Dober dan')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Dober dan')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'Dober dan custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Dober večer')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Dober večer')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Dober večer custom suffix'
  )
})
