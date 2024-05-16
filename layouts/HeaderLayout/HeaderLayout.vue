<script setup lang="ts">
import HeaderText from './components/HeaderText.vue'
import HeaderTab from './components/HeaderTab.vue'
</script>
<template>
    <header class="header bg-[#353A44] py-5">
        <div class="container flex justify-between  mx-auto">
            <HeaderText />
            <HeaderTab/>
        </div>
    </header>
</template>
<style>
.container {
    width: 1400px;
}
</style>