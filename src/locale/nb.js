module.exports = (i) => {
  const hour = i.hour()
  if (hour >= 4 && hour < 12) {
    return 'God morgen%s' // (4:00 - 11:59)
  }
  if (hour >= 12 && hour < 17) {
    return 'God dag%s' // (12:00 - 16:59)
  }
  return 'God kveld%s'
}
