module.exports = (i) => {
    const hour = i.hour()
    if (hour >= 4 && hour < 10) {
        return 'Dobro jutro%s' // (4:00 - 09:59)
    }
    if (hour >= 10 && hour < 20) {
        return 'Dober dan%s' // (10:00 - 19:59)
    }
    return 'Dober večer%s'
}
