const dayjs = require('dayjs')
require('dayjs/locale/cs')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in CS', () => {
  dayjs.locale('cs')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Dobré jitro')
  expect(dayjs('2022-07-07 07:59:59').greet()).toBe('Dobré jitro')
  expect(dayjs('2022-07-07 07:59:59').greet(' custom suffix')).toBe(
    'Dobré jitro custom suffix'
  )
  expect(dayjs('2022-07-07 08:00:00').greet()).toBe('Dobré dopoledne')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Dobré dopoledne')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'Dobré dopoledne custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Dobré poledne')
  expect(dayjs('2022-07-07 12:00:00').greet(' custom suffix')).toBe(
    'Dobré poledne custom suffix'
  )
  expect(dayjs('2022-07-07 12:01:00').greet()).toBe('Dobré odpoledne')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Dobré odpoledne')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'Dobré odpoledne custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Dobrý večer')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Dobrý večer')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Dobrý večer custom suffix'
  )
})
