const dayjs = require('dayjs')
require('dayjs/locale/nl-be')

const greetPlugin = require('../index')

dayjs.extend(greetPlugin)

it('Greet in NL-BE', () => {
  dayjs.locale('nl-be')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Goedemorgen')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Goedemorgen')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'Goedemorgen custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Goedemiddag')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Goedemiddag')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'Goedemiddag custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Goedenavond')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Goedenavond')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Goedenavond custom suffix'
  )
})
