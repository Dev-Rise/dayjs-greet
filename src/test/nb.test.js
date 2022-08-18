const dayjs = require('dayjs')
require('dayjs/locale/nb')

const greetPlugin = require('../index')

dayjs.extend(greetPlugin)

it('Greet in NB', () => {
  dayjs.locale('nb')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('God morgen')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('God morgen')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'God morgen custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('God dag')
  expect(dayjs('2022-07-07 16:59:59').greet()).toBe('God dag')
  expect(dayjs('2022-07-07 16:59:59').greet(' custom suffix')).toBe(
    'God dag custom suffix'
  )
  expect(dayjs('2022-07-07 17:00:00').greet()).toBe('God kveld')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('God kveld')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'God kveld custom suffix'
  )
})
