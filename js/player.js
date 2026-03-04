const next_btn = document.getElementsByTagName('button')[0];
const player_container = document.querySelector('.player-container');
const player_button = document.querySelector('.player-container .play-button');
const resume = document.querySelector('.resume-panel');
const films = [
    '../assets/video/film_1.mp4',
    '../assets/video/film_2.mp4',
    '../assets/video/film_3.mp4'
];
let setDown;
let current_video;
let video = [];
player_button.textContent = "Play";

function init() {
    current_video.pause();
    current_video.currentTime = 0;
    player_button.textContent = 'Play';
}

for (let i = 0; i < 1; i++) {
    video[i] = document.createElement('video');
    video[i].classList.add('video');
    video[i].setAttribute('loop', '');
    video[i].setAttribute('src', films[i]);
    video[i].style.zIndex = i;
    player_container.appendChild(video[i]);
}

current_video = video.pop();
current_video.pause();

document.onkeydown = (event) => {
    if (event.key === 'Enter') {
        video.unshift(current_video);
        current_video = video.pop();
        current_video.pause();
        current_video.currentTime = 0;
    }
}

player_container.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleFade(player_button);
});

player_button.addEventListener('click', (event) => {
    event.stopPropagation();
    action = player_button.textContent.toLowerCase();
    switch (action) {
        case 'play':
            current_video.play();
            player_button.textContent = 'Pause';
            break;
        case 'pause':
            current_video.pause();
            player_button.textContent = 'Play';
            break;
    }
    
    hiddenPlayerCommand();
});

resume.addEventListener('click', (event) => {
    event.stopPropagation();
    resume.classList.toggle('resume-panel-height');    
});

function toggleFade(element) {
    if (!element.classList.contains('fade-out')) {
        element.classList.toggle('fade-out');
    } else {
        element.classList.toggle('fade-out');
        
        hiddenPlayerCommand();
    }
}

function hiddenPlayerCommand() {
    setDown = setTimeout(() => {
        console.log(('in timeout'));
        player_button.classList.toggle('fade-out');
        clearTimeout(setDown);
    }, 4000);
}

next_btn.addEventListener('click', () => {
   video.unshift(current_video);
    current_video = video.pop();
    init();
});