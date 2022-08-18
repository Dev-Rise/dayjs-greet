# DayJS Greet Plugin

A [Day.js](https://day.js.org/) plugin to get time-based greeting.

### Installation
`npm i dayjs-greet`

### Initialization

```js
import dayjs from 'dayjs'
import greetPlugin from 'dayjs-greet'

// import dayjs locales before you extend dayjs
// import 'dayjs/locale/de';
dayjs.extend(greetPlugin)
```

### Usage

```js
dayjs('2022-03-08 08:00:00').greet() // Good morning
dayjs('2022-03-08 08:00:00').greet(' Your Name!') // Good morning Your Name!
dayjs('2022-03-08 13:00:00').greet() // Good afternoon
dayjs('2022-03-08 13:00:00').greet(' Your Name!') // Good afternoon Your Name!
dayjs('2022-03-08 20:00:00').greet() // Good evening
dayjs('2022-03-08 20:00:00').greet(' Your Name!') // Good evening Your Name!
```

### Contributors

![contributers](https://contrib.rocks/image?repo=dev-rise/dayjs-greet)
