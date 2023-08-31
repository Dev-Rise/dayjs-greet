const dayjs = require('dayjs')
require('dayjs/locale/sl')

const greetPlugin = require('../src')

dayjs.extend(greetPlugin)

it('Greet in SL', () => {
    dayjs.locale('sl')
    expect(dayjs('2022-07-07 04:00:00').greet()).toBe('Dobro jutro')
    expect(dayjs('2022-07-07 09:59:59').greet()).toBe('Dobro jutro')
    expect(dayjs('2022-07-07 09:59:59').greet(' custom suffix')).toBe(
        'Dobro jutro custom suffix'
    )
    expect(dayjs('2022-07-07 10:00:00').greet()).toBe('Dober dan')
    expect(dayjs('2022-07-07 19:59:59').greet()).toBe('Dober dan')
    expect(dayjs('2022-07-07 19:59:59').greet(' custom suffix')).toBe(
        'Dober dan custom suffix'
    )
    expect(dayjs('2022-07-07 20:00:00').greet()).toBe('Dober večer')
    expect(dayjs('2022-07-07 03:59:59').greet()).toBe('Dober večer')
    expect(dayjs('2022-07-07 03:59:59').greet(' custom suffix')).toBe(
        'Dober večer custom suffix'
    )
})
