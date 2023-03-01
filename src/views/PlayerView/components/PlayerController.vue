<template>
    <div class="player-controller">
        <div class="player-controller-avatar"></div>
        <div class="player-controller-copyright">
            <div class="player-controller-song">上面歌名</div>
            <div class="player-controller-author">下面创作者</div>
        </div>
        <div class="player-controller-prev">
            <i class="iconfont icon-shangyishou"></i>
        </div>
        <div class="player-controller-status">
            <i class="iconfont icon-bofang"></i>
        </div>
        <div class="player-controller-next">
            <i class="iconfont icon-xiayishou"></i>
        </div>
        <div class="player-controller-progress"></div>
        <div class="player-controller-time">03:12</div>
    </div>
</template>
<style>

.player-controller {
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

.player-controller > .player-controller-avatar {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: url("https://picsum.photos/1920/1080?image=15") no-repeat;
    background-size: cover;
}

.player-controller > .player-controller-copyright {
    width: 140px;
}

.player-controller-copyright > .player-controller-song {
    font-size: 20px;
}

.player-controller-copyright > .player-controller-author {
    font-size: 14px;
}

.player-controller > .player-controller-prev > i {
    font-size: 34px;
}

.player-controller > .player-controller-status {
    color: var(--primary-color);
}

.player-controller > .player-controller-status > i {
    font-size: 60px;
}

.player-controller > .player-controller-next > i {
    font-size: 34px;
}

.player-controller .player-controller-progress {
    width: 340px;
    height: 4px;
    background-color: var(--primary-color);
    border-radius: 12px;
}


</style>
