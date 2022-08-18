const dayjs = require('dayjs')
require('dayjs/locale/hr')

const greetPlugin = require('../index')

dayjs.extend(greetPlugin)

it('Greet in HR', () => {
  dayjs.locale('hr')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Dobro jutro')
  expect(dayjs('2022-07-07 09:59:59').greet()).toBe('Dobro jutro')
  expect(dayjs('2022-07-07 09:59:59').greet(' custom suffix')).toBe(
    'Dobro jutro custom suffix'
  )
  expect(dayjs('2022-07-07 10:00:00').greet()).toBe('Dobar dan')
  expect(dayjs('2022-07-07 19:59:59').greet()).toBe('Dobar dan')
  expect(dayjs('2022-07-07 19:59:59').greet(' custom suffix')).toBe(
    'Dobar dan custom suffix'
  )
  expect(dayjs('2022-07-07 20:00:00').greet()).toBe('Dobra večer')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Dobra večer')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Dobra večer custom suffix'
  )
})
