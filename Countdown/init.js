const timer = new CountdownTimer({
    selector: "#clock1",
    targetDate: 1725523200000
})
timer.StartTimer()

Time = (Math.floor(Date.now() / (24 * 60 * 60 * 1000)) * 24 * 60 * 60 * 1000) + 75600000
//Time = (Math.floor(Date.now() / (24 * 60 * 60 * 1000)) * 24 * 60 * 60 * 1000) + 72000000

const timer1 = new CountdownTimer({
    selector: "#clock2",
    targetDate: Time
})
timer1.StartTimer()
