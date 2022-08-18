module.exports = (i) => {
  const hour = i.hour()
  if (hour >= 4 && hour < 11) {
    return 'Günaydın%s' // (4:00 - 10:59)
  }
  if (hour >= 11 && hour < 18) {
    return 'İyi günler%s' // (11:00 - 17:59)
  }
  return 'İyi akşamlar%s'
}
