const dayjs = require('dayjs')
require('dayjs/locale/tr')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in TR', () => {
  dayjs.locale('tr')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Günaydın')
  expect(dayjs('2022-07-07 10:59:59').greet()).toBe('Günaydın')
  expect(dayjs('2022-07-07 10:59:59').greet(' custom suffix')).toBe(
    'Günaydın custom suffix'
  )
  expect(dayjs('2022-07-07 11:00:00').greet()).toBe('İyi günler')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('İyi günler')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'İyi günler custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('İyi akşamlar')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('İyi akşamlar')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'İyi akşamlar custom suffix'
  )
})
