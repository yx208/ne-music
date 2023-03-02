<script setup lang="ts">

import { Howl } from 'howler';

</script>
<template>
    <div class="player-bar">
        <div class="player-bar-avatar"></div>
        <div class="player-bar-copyright">
            <div class="player-bar-song">上面歌名</div>
            <div class="player-bar-author">下面创作者</div>
        </div>
        <div class="player-bar-control">
            <div class="player-bar-prev">
                <i class="iconfont icon-shangyishou"></i>
            </div>
            <div class="player-bar-status">
                <i class="iconfont icon-bofang"></i>
            </div>
            <div class="player-bar-next">
                <i class="iconfont icon-xiayishou"></i>
            </div>
        </div>
        <div class="player-bar-progress">
            <div class="player-bar-progress-bar"></div>
        </div>
        <div class="player-bar-time">03:12</div>
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
}

.player-bar-progress-bar {
    width: 80%;
    height: 100%;
    background-color: var(--primary-color);
    border-radius: 12px;
}


</style>
