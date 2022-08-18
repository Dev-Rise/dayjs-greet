const greetLocales = require('./locale')

const enGreet = (i) => {
  const hour = i.hour()
  if (hour >= 4 && hour < 12) {
    return 'Good morning%s' // (4:00 - 11:59)
  }
  if (hour >= 12 && hour < 18) {
    return 'Good afternoon%s' // (12:00 - 17:59)
  }
  return 'Good evening%s'
}

const updateLocale = (dayjsInstance, key) => {
  const localeList = dayjsInstance.Ls
  const locale = localeList[key]
  if (!locale) {
    return
  }
  locale.greet = greetLocales[key]
}

function plugin(option, dayjsClass, dayjsInstance) {
  // update locale
  Object.keys(greetLocales).forEach((key) => {
    updateLocale(dayjsInstance, key)
  })

  dayjsClass.prototype.greet = function (suffix = '') {
    const instance = this
    const locale = this.$locale()

    const greetLocale = locale.greet || enGreet

    return greetLocale(instance).replace('%s', suffix)
  }
}

module.exports = plugin
