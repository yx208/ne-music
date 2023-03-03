<script setup lang="ts">

import {Howl} from 'howler';
import {ref} from "vue";

const progress = ref('0');

const howl = new Howl({
    src: "http://localhost:6606/qfdy.m4a",
    onload: () => {
        soundControl.duration = howl.duration();
    },
    onplay: () => updateProgress(),
    onpause: () => stopUpdateProgress(),
    onend: () => stopUpdateProgress(),
});

// 是否正在进行 fade
const soundControl = {
    isFading: false,
    isPause: false,
    duration: 0,
    progressTimer: 0,
};

howl.on('fade', () => {
    soundControl.isFading = false;
    soundControl.isPause && howl.pause();
});

const updateProgress = () => {
    soundControl.progressTimer = window.setInterval(() => {
        progress.value = howl.seek() / soundControl.duration * 100 + '%';
    }, 1000);
};

const stopUpdateProgress = () => {
    clearInterval(soundControl.progressTimer);
};

const onPlay = () => {

    if (soundControl.isFading) return;

    if (howl.playing()) {
        soundControl.isFading = true;
        soundControl.isPause = true;
        howl.fade(1, 0, 1000);
    } else {
        soundControl.isFading = true;
        soundControl.isPause = false;
        howl.fade(0, 1, 1000);
        howl.play();
    }
};

</script>
<template>
    <div class="player-bar">
        <div class="player-bar-avatar"></div>
        <div class="player-bar-copyright">
            <div class="player-bar-song">情非得已</div>
            <div class="player-bar-author">庾澄庆</div>
        </div>
        <div class="player-bar-control">
            <div class="player-bar-prev">
                <i class="iconfont icon-shangyishou"></i>
            </div>
            <div class="player-bar-status" @click="onPlay">
                <i class="iconfont icon-bofang"></i>
            </div>
            <div class="player-bar-next">
                <i class="iconfont icon-xiayishou"></i>
            </div>
        </div>
        <div class="player-bar-progress">
            <div
                class="player-bar-progress-bar"
                :style="{ width: progress }"
            ></div>
        </div>
        <div class="player-bar-time">00:00</div>
    </div>
</template>
<style>

.player-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background-color: var(--background-base);
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0 24px;
}

.player-bar-avatar {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: url(https://picsum.photos/1920/1080?image=17) no-repeat center center;
    background-size: cover;
}

.player-bar-copyright {
    width: 140px;
}

.player-bar-song {
    font-size: 20px;
}

.player-bar-author {
    font-size: 14px;
}

.player-bar-control {
    display: flex;
    align-items: center;
}

.player-bar-prev > i {
    font-size: 34px;
}

.player-bar-status > i {
    color: var(--primary-color);
    font-size: 60px;
}

.player-bar-next > i {
    font-size: 34px;
}

.player-bar-progress {
    width: 340px;
    height: 6px;
    background-color: var(--progress-background);
    border-radius: 12px;
    overflow: hidden;
}

.player-bar-progress-bar {
    width: 0;
    height: 100%;
    background-color: var(--primary-color);
    border-radius: 12px;
    transition: width .2s;
}


</style>
