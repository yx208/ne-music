<script setup lang="ts">

import {ref} from "vue";
import songLyric from "../config/lyric.json";

const currentSentence = ref(2);

</script>
<template>
    <div class="lyric">
        <ul class="hide-scrollbar lyric-list">
            <li
                class="lyric-item"
                v-for="(item, index) in songLyric"
                :key="index"
                :class="{ 'lyric-item-active': index === currentSentence }"
            >{{ item }}</li>
        </ul>
    </div>
</template>
<style scoped>

.lyric-list {
    list-style: none;
    width: 300px;
    height: 400px;
    padding: 0;
    overflow: auto;
    background-color: #ddd;
    text-align: center;
}

.lyric-item {
    height: 40px;
    line-height: 40px;
}

.lyric-item.lyric-item-active {
    color: var(--lyric-highlight);
    background-color: var(--primary-color);
}

</style>