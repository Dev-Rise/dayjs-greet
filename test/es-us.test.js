const dayjs = require('dayjs')
require('dayjs/locale/es-us')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in ES-US', () => {
  dayjs.locale('es-us')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Buenos días')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Buenos días')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'Buenos días custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Buenas tardes')
  expect(dayjs('2022-07-07 19:59:59').greet()).toBe('Buenas tardes')
  expect(dayjs('2022-07-07 19:59:59').greet(' custom suffix')).toBe(
    'Buenas tardes custom suffix'
  )
  expect(dayjs('2022-07-07 20:00:00').greet()).toBe('Buenas noches')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Buenas noches')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Buenas noches custom suffix'
  )
})
