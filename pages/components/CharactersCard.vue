<script lang="ts" setup>
import { useCharacterService } from './CharactersService.ts';
import { onMounted } from 'vue';

const { fetchCharacters, characters } = useCharacterService();

onMounted(() => {
    fetchCharacters();
});

</script>
<template>
    <div class="cards flex gap-5 flex-wrap">
        <div class="card w-[300px] border rounded-2xl relative" v-for="item in characters" :key="item.id">
            <div class="img ">
                <img :src="item.image" alt="" class="rounded-2xl">
            </div>
            <div class="absolute rounded-lg px-3 top-1 right-1"
                :class="item.status === 'Alive' ? 'bg-green-600' : item.status === 'unknown' ? 'bg-gray-500' : 'bg-red-500'">
                <p>{{ item.status }}</p>
            </div>
            <div class="bio p-5">
                <h4 class="name text-lg">{{item.name}}</h4>

                <p class="last-location text-sm mt-3">
                    Last location
                </p>
                <p class="location">{{ item.location.name }}</p>
            </div>
        </div>
        
    </div>
</template>
