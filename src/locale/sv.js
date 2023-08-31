module.exports = (i) => {
  const hour = i.hour()
  if (hour >= 4 && hour < 11) {
    return 'God morgon%s' // (4:00 - 10:59)
  }
  if (hour >= 11 && hour < 20) {
    return 'Goddag%s' // (11:00 - 19:59)
  }
  return 'God kväll%s'
}
