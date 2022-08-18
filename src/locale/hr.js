module.exports = (i) => {
  const hour = i.hour()
  if (hour >= 4 && hour < 10) {
    return 'Dobro jutro%s' // (4:00 - 9:59)
  }
  if (hour >= 10 && hour < 20) {
    return 'Dobar dan%s' // (10:00 - 19:59)
  }
  return 'Dobra večer%s'
}
