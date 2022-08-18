const dayjs = require('dayjs')

const greetPlugin = require('../index')

dayjs.extend(greetPlugin)

it('Greet in EN', () => {
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Good morning')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Good morning')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'Good morning custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Good afternoon')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Good afternoon')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'Good afternoon custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Good evening')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Good evening')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Good evening custom suffix'
  )
})
