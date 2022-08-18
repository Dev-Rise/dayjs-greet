const dayjs = require('dayjs')
require('dayjs/locale/he')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in HE', () => {
  dayjs.locale('he')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('בוקר טוב')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('בוקר טוב')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'בוקר טוב custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('ערב טוב')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('ערב טוב')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'ערב טוב custom suffix'
  )
})
