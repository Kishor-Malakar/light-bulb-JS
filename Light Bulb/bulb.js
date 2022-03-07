let btn = document.getElementById('on');
let light = document.getElementById('light')
btn.addEventListener('click', turnOn)
btn.addEventListener('click', turnOff)

function turnOn(e) {
    if(btn.textContent.includes('Turn On')){
        light.src = "img/2.png"
        btn.textContent = "Turn Off"
    }
    else{
        light.src = "img/1.png"
        btn.textContent = "Turn On"
    }
}