const dayjs = require('dayjs')
require('dayjs/locale/pl')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in PL', () => {
  dayjs.locale('pl')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Dzień dobry')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Dzień dobry')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'Dzień dobry custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Dobry wieczór')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Dobry wieczór')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Dobry wieczór custom suffix'
  )
})
