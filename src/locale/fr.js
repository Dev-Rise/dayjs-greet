module.exports = (i) => {
  const hour = i.hour()
  if (hour >= 4 && hour < 18) {
    return 'Bonjour%s' // (4:00 - 17:59)
  }
  return 'Bonsoir%s'
}
