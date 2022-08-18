const dayjs = require('dayjs')
require('dayjs/locale/it')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in IT', () => {
  dayjs.locale('it')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Buongiorno')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Buongiorno')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'Buongiorno custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Buonasera')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Buonasera')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Buonasera custom suffix'
  )
})
