const dayjs = require('dayjs')
require('dayjs/locale/el')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in EL', () => {
  dayjs.locale('el')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Kαλημέρα')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Kαλημέρα')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'Kαλημέρα custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Kαλησπέρα')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Kαλησπέρα')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Kαλησπέρα custom suffix'
  )
})
