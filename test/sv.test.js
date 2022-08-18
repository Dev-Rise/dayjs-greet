const dayjs = require('dayjs')
require('dayjs/locale/sv')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in SV', () => {
  dayjs.locale('sv')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Dobrý deň')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Dobrý deň')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'Dobrý deň custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Dobrý večer')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Dobrý večer')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Dobrý večer custom suffix'
  )
})
