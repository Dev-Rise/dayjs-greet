module.exports = (i) => {
    const hour = i.hour()
    if (hour >= 4 && hour < 12) {
        return 'Bom dia%s' // (4:00 - 11:59)
    }
    if (hour >= 12 && hour < 20) {
        return 'Boa tarde%s' // (12:00 - 19:59)
    }
    return 'Boa noite%s'
}
