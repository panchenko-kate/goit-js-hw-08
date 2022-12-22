import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));
   
function onPlay ({ seconds }) {
    localStorage.setItem(currentTime, seconds);
}

player.setCurrentTime().then(function() {
}).catch(function() {
    if(!localStorage.getItem(currentTime)){
        return;
    }
    player.setCurrentTime(localStorage.getItem(currentTime));
});