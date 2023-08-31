const dayjs = require('dayjs')
require('dayjs/locale/pt')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in PT', () => {
  dayjs.locale('pt')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Bom dia')
  expect(dayjs('2022-07-07 11:59:59').greet()).toBe('Bom dia')
  expect(dayjs('2022-07-07 11:59:59').greet(' custom suffix')).toBe(
    'Bom dia custom suffix'
  )
  expect(dayjs('2022-07-07 12:00:00').greet()).toBe('Boa tarde')
  expect(dayjs('2022-07-07 19:59:59').greet()).toBe('Boa tarde')
  expect(dayjs('2022-07-07 19:59:59').greet(' custom suffix')).toBe(
    'Boa tarde custom suffix'
  )
  expect(dayjs('2022-07-07 20:00:00').greet()).toBe('Boa noite')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Boa noite')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Boa noite custom suffix'
  )
})
