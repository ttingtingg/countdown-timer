const timerDisplay = document.querySelector(".timer");
const minutesInput = document.getElementById("minutes");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const pauseButton = document.getElementById("pause");

let remainingSecond = 0;
let timerInterval;

startButton.addEventListener("click",function(){
    clearInterval(timerInterval);

    if (remainingSecond > 0) {
       
    } else {
        if (minutesInput.value === "" || Number(minutesInput.value) <= 0){
            alert("please enter valid time");
            return
        }
        remainingSecond = Number(minutesInput.value)*60
    }

    timerInterval = setInterval(function(){
            remainingSecond--;
            let minutes = Math.floor(remainingSecond / 60);
            let seconds = remainingSecond % 60;
            timerDisplay.textContent =`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
            if (remainingSecond <= 0){
                clearInterval(timerInterval);
                timerDisplay.textContent = " Time's up!"
            }
            console.log(remainingSecond);
        },1000);

    console.log(remainingSecond);
});

resetButton.addEventListener("click",function(){
    clearInterval(timerInterval);
    remainingSecond = Number(minutesInput.value)*60;
    let minutes = Math.floor(remainingSecond / 60);
    let seconds = remainingSecond % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
});

pauseButton.addEventListener("click", function(){
    clearInterval(timerInterval);
})