module.exports = (i) => {
  const hour = i.hour()
  if (hour >= 4 && hour < 12) {
    return 'Buenos días%s' // (4:00 - 11:59)
  }
  if (hour >= 12 && hour < 20) {
    return 'Buenas tardes%s' // (12:00 - 19:59)
  }
  return 'Buenas noches%s'
}
