const dayjs = require('dayjs')
require('dayjs/locale/da')

const greetPlugin = require('../index')

dayjs.extend(greetPlugin)

it('Greet in DA', () => {
  dayjs.locale('da')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('God morgen')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('God morgen')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'God morgen custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('God dag')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('God dag')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'God dag custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('God aften')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('God aften')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'God aften custom suffix'
  )
})
