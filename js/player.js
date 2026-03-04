const next_btn = document.getElementsByTagName('button')[0];
const player_container = document.querySelector('.player-container');
const player_button = document.querySelector('.player-container .play-button');
const resume = document.querySelector('.resume-panel');
const films = [
    '../assets/video/film_3.mp4',
    '../assets/video/film_2.mp4',
    '../assets/video/film_1.mp4'
];
let videos = []
let startY = 0;
let setDown;
let current_video;
let video_index = 0;

init();

function init() {
    for (let i = films.length - 1; i >= 0; --i) {
        let video = document.createElement('video');
        video.classList.add('video');
        video.setAttribute('loop', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('preload', 'metadata');
        video.setAttribute('src', films[i]);
        player_container.appendChild(video);
        videos.push(video);
        console.log(video);
    }
    updateVideo();

    player_button.setAttribute('src', '../assets/img/play.svg');
}

player_container.addEventListener('touchstart', (event) => {
    event.stopPropagation();
    startY = event.touches[0].clientY;
});

player_container.addEventListener('touchend', (event) => {
    event.stopPropagation();
    let endY = event.changedTouches[0].clientY;
    let diff = endY - startY;
    
    if (diff < -50) {   
            console.log('swiped up');
            nextVideo();
    } else if (diff > 50) {
            console.log('swiped down');
            previousVideo();
    }
});

function nextVideo() {
    if (!videos.length) return;
    video_index = (video_index + 1) % videos.length;    
    
    updateVideo();
}

function previousVideo() {
    if (!videos.length) return;
    video_index = (video_index - 1 + videos.length) % videos.length;
        
    updateVideo();
}

function updateVideo() {
    videos.forEach((video, idx) => {
        console.log(idx, video_index);
                
        if (idx == video_index) {
            video.style.display = 'block';
            video.style.transform = 'translateY(0)';
            video.style.zIndex = '1';
            current_video = video;
            video.pause();
            player_button.setAttribute('src', '../assets/img/play.svg');

        } else {
            video.style.display = 'none';
            video.style.transform = 'translateY(100%)';
            video.style.zIndex = '-1';
        }
       
    });
}

player_container.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleFade(player_button);
});

player_button.addEventListener('click', (event) => {
    event.stopPropagation();
    action = player_button.getAttribute('src').includes('play') ? 'play' : 'pause';
    switch (action) {
        case 'play':
            current_video.play();
            player_button.setAttribute('src', '../assets/img/pause.svg');
            break;
        case 'pause':
            current_video.pause();
            player_button.setAttribute('src', '../assets/img/play.svg');
            break;
    }
    
    hiddenPlayerCommand();
});

resume.addEventListener('click', (event) => {
    event.stopPropagation();
    resume.classList.toggle('resume-panel-height');
    resume.scrollTo(0, 0);    
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

