module.exports = (i) => {
  const hour = i.hour()
  if (hour >= 4 && hour < 12) {
    return 'Dobré ráno%s' // (4:00 - 11:59)
  }
  if (hour >= 12 && hour < 18) {
    return 'Dobrý deň%s' // (12:00 - 17:59)
  }
  return 'Dobrý večer%s'
}
