class CountdownTimer {
    constructor({
        selector,
        targetDate
    }) {
        this.selector = selector
        this.targetDate = targetDate
    
        this.refs = {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            minutes: document.querySelector(`${this.selector} [data-value="minutes"]`),
            seconds: document.querySelector(`${this.selector} [data-value="seconds"]`)
        }
    }

    GetTimeRemaining(endTime) {
        const total = endTime - Date.now()
        const days = Math.floor(total / (1000 * 60 * 60 * 24))
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((total / 1000 / 60) % 60)
        const seconds = Math.floor((total / 1000) % 60)

        return {
            total,
            days,
            hours,
            minutes, 
            seconds
        }
    }

    UpdateTimer({days, hours, minutes, seconds}) {
        this.refs.days.textContent = days
        this.refs.hours.textContent = hours
        this.refs.minutes.textContent = minutes
        this.refs.seconds.textContent = seconds
    }

    StartTimer(){ // Time must be a int
        const timer = this.GetTimeRemaining(this.targetDate)
        this.UpdateTimer(timer)
        setInterval(() => {
            const timer = this.GetTimeRemaining(this.targetDate)
            this.UpdateTimer(timer)
        }, 1000);
    }
}

