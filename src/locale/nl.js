module.exports = (i) => {
  const hour = i.hour()
  if (hour >= 4 && hour < 12) {
    return 'Goedemorgen%s' // (4:00 - 11:59)
  }
  if (hour >= 12 && hour < 18) {
    return 'Goedemiddag%s' // (12:00 - 17:59)
  }
  return 'Goedenavond%s'
}
