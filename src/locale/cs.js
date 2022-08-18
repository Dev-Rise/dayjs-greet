module.exports = (i) => {
  const hour = i.hour()
  if (hour >= 4 && hour < 8) {
    return 'Dobré jitro%s' // (4:00 - 7:59)
  }
  if (hour >= 8 && hour < 12) {
    return 'Dobré dopoledne%s' // (8:00 - 11:59)
  }
  if (hour >= 12 && hour < 18) {
    if (hour === 12 && i.minute() === 0) {
      return 'Dobré poledne%s' // (12:00)
    }
    return 'Dobré odpoledne%s' // (12:01 - 17:59)
  }
  return 'Dobrý večer%s'
}
