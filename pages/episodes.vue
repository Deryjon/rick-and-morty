<script lang="ts" setup>
</script>
<template>
    <section class="episodes">
        <div class="container mx-auto mt-10">
            <h2 class="text-3xl text-center ">Episodes</h2>
            
            <UInput v-model="value" class=" w-[700px] mx-auto mt-5"   trailing  icon="i-heroicons-magnifying-glass-20-solid"
 color="blue" variant="outline" placeholder="Search for characters" />
<!-- 
 <div class="wrapper flex gap-5">
    <div class="left w-[400px]">
        <p class="filter">Filters</p>
        <EpisodesFilter/>
    </div>
    <div class="right">
        <div class="cards">
card
        </div>
    </div>
 </div> -->
        </div>
    </section>
</template>
