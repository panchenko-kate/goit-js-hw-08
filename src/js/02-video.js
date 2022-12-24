import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));
   
function onPlay ({ seconds }) {
    localStorage.setItem(CURRENT_TIME, seconds);
}

player.setCurrentTime().then(function() {
}).catch(function() {
    if(!localStorage.getItem(CURRENT_TIME)){
        return;
    }
    player.setCurrentTime(localStorage.getItem(CURRENT_TIME));
});