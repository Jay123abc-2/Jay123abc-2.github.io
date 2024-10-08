class CountdownTimer {
    // Create a timer, targetDate being an int. 
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
            seconds: document.querySelector(`${this.selector} [data-value="seconds"]`),
            endText: document.querySelector(`${this.selector} [data-value="endtime"]`)
        }
    }

    // Gets the time remaining from given endTime 
    // Add something to support - values?
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

    // Updates timers text
    UpdateTimer({days, hours, minutes, seconds}) {
        this.refs.days.textContent = days
        this.refs.hours.textContent = hours
        this.refs.minutes.textContent = minutes
        this.refs.seconds.textContent = seconds
    }

    // Starts the timer
    StartTimer(){ 
        const timer = this.GetTimeRemaining(this.targetDate)
        this.UpdateTimer(timer)
        
        const date = new Date(this.targetDate)
        const formattedDate = date.toLocaleDateString()
        const formattedTime = date.toLocaleTimeString().slice(0, -3)
        console.log(formattedDate, formattedTime)
        this.refs.endText.textContent += formattedDate + " at " + formattedTime
        setInterval(() => {
            const timer = this.GetTimeRemaining(this.targetDate)
            this.UpdateTimer(timer)
        }, 1000);
    }
}

