<script setup lang="ts">
import { ref } from 'vue'
import { useCharacterService } from './CharactersService';
const {  fetchCharacters, setSearchStatus, setSearchSpecies, setSearchGender } = useCharacterService();

const status = ref('')
const species = ref('')
const gender = ref('')

const items = [{
  label: 'Status',
  slot: 'status'
}
]

const setStatus = (value: string) => {
  status.value = value
}
const setSpecies = (value: string) => {
  species.value = value
}
const setGender = (value: string) => {
  gender.value = value
}
watch(status, (newValue) => {
  setSearchStatus(newValue)
  fetchCharacters();

})
watch(species, (newValue) => {
  setSearchSpecies(newValue)
  fetchCharacters();

})
watch(gender, (newValue) => {
  setSearchGender(newValue)
  fetchCharacters()
})
</script>

<template>
  <UAccordion :items="items" color="blue" variant="solid" size="lg">
    <template #status>
      <div class="flex gap-2 text-sm text-white">
        <button class="border rounded-lg p-2" @click="setStatus('Alive')" :class="{ 'bg-blue-500': status === 'Alive' }">Alive</button>
        <button class="border rounded-lg p-2" @click="setStatus('Dead')" :class="{ 'bg-blue-500': status === 'Dead' }">Dead</button>
        <button class="border rounded-lg p-2" @click="setStatus('Unknown')" :class="{ 'bg-blue-500': status === 'Unknown' }">Unknown</button>
      </div>
    </template>
    <!-- <template #species>
      <div class="flex flex-wrap gap-2 text-sm text-white">

      <button class="border rounded-lg p-2" @click="setSpecies('Human')" :class="{ 'bg-blue-500': species === 'Human' }">Human</button>
        <button class="border rounded-lg p-2" @click="setSpecies('Alien')" :class="{ 'bg-blue-500': species === 'Alien' }">Alien</button>
        <button class="border rounded-lg p-2" @click="setSpecies('Humanoid')" :class="{ 'bg-blue-500': species === 'Humanoid' }">Humanoid</button>
        <button class="border rounded-lg p-2" @click="setSpecies('Poopybutthole')" :class="{ 'bg-blue-500': species === 'Poopybutthole' }">Poopybutthole</button>
        <button class="border rounded-lg p-2" @click="setSpecies('Mythological')" :class="{ 'bg-blue-500': species === 'Mythological' }">Mythological</button>
        <button class="border rounded-lg p-2" @click="setSpecies('Unknown')" :class="{ 'bg-blue-500': species === 'Unknown' }">Unknown</button>
        <button class="border rounded-lg p-2" @click="setSpecies('Animal')" :class="{ 'bg-blue-500': species === 'Animal' }">Animal</button>
        <button class="border rounded-lg p-2" @click="setSpecies('Disease')" :class="{ 'bg-blue-500': species === 'Disease' }">Disease</button>
        <button class="border rounded-lg p-2" @click="setSpecies('Robot')" :class="{ 'bg-blue-500': species === 'Robot' }">Robot</button>
        <button class="border rounded-lg p-2" @click="setSpecies('Cronenberg')" :class="{ 'bg-blue-500': species === 'Cronenberg' }">Cronenberg</button>
        </div>
    </template>
    <template #gender>
      <div class="flex gap-2 text-sm text-white">
        <button class="border rounded-lg p-2" @click="setGender('female')" :class="{ 'bg-blue-500': gender === 'female' }">female</button>
        <button class="border rounded-lg p-2" @click="setGender('male')" :class="{ 'bg-blue-500': gender === 'male' }">male</button>
        <button class="border rounded-lg p-2" @click="setGender('genderless')" :class="{ 'bg-blue-500': gender === 'genderless' }">genderless</button>
        <button class="border rounded-lg p-2" @click="setGender('unknown')" :class="{ 'bg-blue-500': gender === 'unknown' }">unknown</button>
      </div>
    </template> -->
  </UAccordion>
</template>

