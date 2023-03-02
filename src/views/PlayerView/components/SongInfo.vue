<template>
    <div class="song-info">
        <div class="song-info-cover"></div>
    </div>
</template>
<style scoped>

.song-info {
    position: relative;
    z-index: 0;
}

.song-info-cover {
    position: relative;
    width: 200px;
    height: 200px;
    background: url(https://picsum.photos/1920/1080?image=17) no-repeat center center;
    background-size: cover;
    border-radius: 24px;
}

.song-info-cover::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 24px;
    filter: blur(10px) brightness(80%) opacity(.8);
    z-index: -1;
}

</style>
