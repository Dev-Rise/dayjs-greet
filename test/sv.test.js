const dayjs = require('dayjs')
require('dayjs/locale/sv')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in SV', () => {
  dayjs.locale('sv')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('God morgon')
  expect(dayjs('2022-07-07 10:59:59').greet()).toBe('God morgon')
  expect(dayjs('2022-07-07 10:59:59').greet(' custom suffix')).toBe(
    'God morgon custom suffix'
  )
  expect(dayjs('2022-07-07 11:00:00').greet()).toBe('Goddag')
  expect(dayjs('2022-07-07 19:59:59').greet()).toBe('Goddag')
  expect(dayjs('2022-07-07 19:59:59').greet(' custom suffix')).toBe(
    'Goddag custom suffix'
  )
  expect(dayjs('2022-07-07 20:00:00').greet()).toBe('God kväll')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('God kväll')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'God kväll custom suffix'
  )
})
