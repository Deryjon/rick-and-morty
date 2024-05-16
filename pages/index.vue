<script lang="ts" setup>
import CharactersFilter from './components/CharactersFilter.vue'
import CharactersCard from './components/CharactersCard.vue'
import { useCharacterService } from './components/CharactersService';

const searchName = ref('')
const { fetchCharacters, setSearchName, characters } = useCharacterService();
 
 const onInput = () => {
     setSearchName(searchName.value)
 }
 onMounted(() => {
     fetchCharacters();
 });
 
watch(characters, () => {
    console.log(characters.value)
});
 
</script>
<template>
    <section class="charaters">
        <div class="container mx-auto mt-10">
            <h2 class="text-3xl text-center ">Characters</h2>

            <UInput v-model="searchName" class=" w-[700px] mx-auto mt-5" trailing
                icon="i-heroicons-magnifying-glass-20-solid" color="blue" variant="outline"
                placeholder="Search for characters" @input="onInput" />

            <div class="wrapper flex gap-10 mt-5">
                <div class="left w-[300px]">
                    <p class="filter">Filters</p>
                    <CharactersFilter />
                </div>  
                <div class="right w-[950px]">
                    <div class="cards flex gap-5 flex-wrap">
                        <div class="card w-[300px] border rounded-2xl relative" v-for="item in characters"
                            :key="item.id">
                            <div class="img ">
                                <img :src="item.image" alt="" class="rounded-2xl">
                            </div>
                            <div class="absolute rounded-lg px-3 top-1 right-1"
                                :class="item.status === 'Alive' ? 'bg-green-600' : item.status === 'unknown' ? 'bg-gray-500' : 'bg-red-500'">
                                <p>{{ item.status }}</p>
                            </div>
                            <div class="bio p-5">
                                <h4 class="name text-lg">{{ item.name }}</h4>

                                <p class="last-location text-sm mt-3">
                                    Last location
                                </p>
                                <p class="location">{{ item.location.name }}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

