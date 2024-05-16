<script lang="ts" setup>
import CharactersFilter from './components/CharactersFilter.vue'
import CharactersCard from './components/CharactersCard.vue'
import { useCharacterService } from './components/CharactersService';
const {fetchCharacters} = useCharacterService()
const valueCharacter = ref('')
watch(valueCharacter, (newValue) => {
  fetchCharacters(newValue)
})

</script>
<template>
    <section class="charaters">
        <div class="container mx-auto mt-10">
            <h2 class="text-3xl text-center ">Characters</h2>

            <UInput v-model="valueCharacter" class=" w-[700px] mx-auto mt-5" trailing
                icon="i-heroicons-magnifying-glass-20-solid" color="blue" variant="outline"
                placeholder="Search for characters" />

            <div class="wrapper flex gap-10 mt-5">
                <div class="left w-[300px]">
                    <p class="filter">Filters</p>
                    <CharactersFilter />
                </div>
                <div class="right w-[950px]">
                    <CharactersCard />
                </div>
            </div>
        </div>
    </section>
</template>
