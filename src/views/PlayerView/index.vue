<script setup lang="ts">

import PlayerController from "./components/PlayerController.vue";

</script>
<template>
    <div class="player-view">
        <div class="player-view-mask"></div>
        <player-controller></player-controller>
    </div>
</template>
<style scoped>

.player-view {
    width: 100vw;
    height: 100vh;
    background: url("https://picsum.photos/1920/1080?image=15") no-repeat;
    background-size: cover;
}

.player-view-mask {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(24px);
    background-color: rgba(0, 0, 0, .4);
}

</style>
