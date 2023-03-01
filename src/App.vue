<script setup lang="ts">

import {ref} from 'vue';

const currentTheme = ref("theme-light");
const onToggle = () => {
    const theme = currentTheme.value;
    currentTheme.value = theme === "theme-light" ? "theme-dark" : "theme-light";
};

</script>

<template>
    <div class="root" :class="currentTheme">
<!--        <button @click="onToggle">切换</button>-->
        <router-view></router-view>
    </div>
</template>

<style>

.root {
    width: 100%;
    height: 100%;
    background-color: var(--background-base);
    color: var(--font-color-base);
    transition: all .4s;
}

</style>
