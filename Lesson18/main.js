document.getElementById('startButton').addEventListener('click', () => {
    const hoursInput = document.getElementById('hoursInput');
    const minutesInput = document.getElementById('minutesInput');
    const secondsInput = document.getElementById('secondsInput');

    const hours = parseInt(hoursInput.value, 10) || 0;
    const minutes = parseInt(minutesInput.value, 10) || 0;
    const seconds = parseInt(secondsInput.value, 10) || 0;

    const totalSeconds = hours * 3600 + minutes * 60 + seconds ;

    if (totalSeconds <= 0) {
        alert('Please enter a valid time greater than 0.');
        return;
    }

    createTimer(totalSeconds);

    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
});

function createTimer(seconds) {
    const timerContainer = document.getElementById('timersContainer');
    const timerElement = document.createElement('div');
    timerElement.classList.add('timer');

    const timeDisplay = document.createElement('span');
    timeDisplay.textContent = formatTime(seconds);

    const controls = document.createElement('div');
    controls.classList.add('controls');

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop';
    stopButton.style.padding = "8px 12px";
    stopButton.style.fontSize = "1rem";
    stopButton.style.border = "none";
    stopButton.style.backgroundColor = "#007BFF";
    stopButton.style.color = "white";
    stopButton.style.borderRadius = "5px";
    stopButton.style.cursor = "pointer";

    let interval;

    function startCountdown() {
        interval = setInterval(() => {
            seconds--;
            if (seconds <= 0) {
                clearInterval(interval);
                timeDisplay.textContent = '00:00:00';
            } else {
                timeDisplay.textContent = formatTime(seconds);
            }
        }, 1000);
    }

    stopButton.addEventListener('click', () => {
        clearInterval(interval);
    });

    controls.appendChild(stopButton);
    timerElement.appendChild(timeDisplay);
    timerElement.appendChild(controls);
    timerContainer.appendChild(timerElement);

    startCountdown();
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${remainingSeconds}`;
}