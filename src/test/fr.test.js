const dayjs = require('dayjs')
require('dayjs/locale/fr')

const greetPlugin = require('../index')

dayjs.extend(greetPlugin)

it('Greet in FR', () => {
  dayjs.locale('fr')
  expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Bonjour')
  expect(dayjs('2022-07-07 17:59:59').greet()).toBe('Bonjour')
  expect(dayjs('2022-07-07 17:59:59').greet(' custom suffix')).toBe(
    'Bonjour custom suffix'
  )
  expect(dayjs('2022-07-07 18:00:00').greet()).toBe('Bonsoir')
  expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Bonsoir')
  expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
    'Bonsoir custom suffix'
  )
})
