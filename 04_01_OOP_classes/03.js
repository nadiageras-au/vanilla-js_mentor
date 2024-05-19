class Timer {
    #startTime
    startTimer() {
        this.#startTime = new Date()
        console.log('this.#startTime',this.#startTime)
    }
    async getTimeElapsed() {

        await new Promise(res =>{
            setTimeout(res,4000)
        })
        const currentTime = new Date()

        console.log('currentTime',currentTime)
        const elapsedMilliseconds = currentTime - this.#startTime
        return Math.floor(elapsedMilliseconds / 1000)
    }
}
class SubTimer extends Timer {
}

const timer = new Timer()
timer.startTimer()
timer.getTimeElapsed().then(timeElapsed => {
    console.log(timeElapsed);
});