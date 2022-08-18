module.exports = (i) => {
  const hour = i.hour()
  if (hour >= 4 && hour < 12) {
    return 'Kαλημέρα%s' // (4:00 - 11:59)
  }
  return 'Kαλησπέρα%s'
}
