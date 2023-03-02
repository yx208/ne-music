<script setup lang="ts">

import PlayerBar from "../../components/PlayerBar/index.vue";
import Lyric from "./components/Lyric.vue";
import SongInfo from "./components/SongInfo.vue";

</script>
<template>
    <div class="player-view">
<!--        <song-info></song-info>-->
        <lyric></lyric>
<!--        <player-bar></player-bar>-->
    </div>
</template>
<style scoped>

.player-view {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 200px;
}

.player-view-mask {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(24px);
    background-color: rgba(0, 0, 0, .4);
}

</style>
