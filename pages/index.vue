<script lang="ts" setup>
import { useCharacterService } from './components/CharactersService';


const status = ref('')

const page = ref(1)

const items = [{
    label: 'Status',
    slot: 'status'
}
]
const { total, fetchCharacters, setSearchName, characters, setSearchStatus, setSearchPage } = useCharacterService();

const setPage = (value: number) => {
    setSearchPage(value)
}

const prevPage = () => {
    if (page.value > 1) {
        page.value--
        setSearchPage(page.value)
    }
}
const nextPage = () => {
    if (page.value < total.value) {
        page.value++
        setSearchPage(page.value)
    }
}

const setStatus = (value: string) => {
    status.value = value
}
const searchName = ref('')

const onInput = () => {
    setSearchName(searchName.value)
    setSearchStatus(status.value)



}
onMounted(() => {
    fetchCharacters();
});



</script>
<template>
    <section class="charaters">
        <div class="container mx-auto mt-10">
            <h2 class="text-3xl text-center ">Characters</h2>

            <div class="flex justify-center gap-2 items-center mt-5">

                <UInput v-model="searchName" class=" w-[700px]  " trailing icon="i-heroicons-magnifying-glass-20-solid"
                    color="blue" variant="outline" placeholder="Search for characters" />
                <button class="btn bg-blue-500 p-1 rounded-lg" @click="onInput">Применить</button>
            </div>

            <div class="wrapper flex gap-10 mt-5">
                <div class="left w-[300px]">
                    <p class="filter">Filters</p>
                    <UAccordion :items="items" color="blue" variant="solid" size="lg">
                        <template #status>
                            <div class="flex gap-2 text-sm text-white">
                                <button class="border rounded-lg p-2" @click="setStatus('Alive')"
                                    :class="{ 'bg-blue-500': status === 'Alive' }">Alive</button>
                                <button class="border rounded-lg p-2" @click="setStatus('Dead')"
                                    :class="{ 'bg-blue-500': status === 'Dead' }">Dead</button>
                                <button class="border rounded-lg p-2" @click="setStatus('Unknown')"
                                    :class="{ 'bg-blue-500': status === 'Unknown' }">Unknown</button>
                            </div>
                        </template>
                    </UAccordion>
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
                                <p class="location">{{ item?.location.name }}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="pagination flex justify-center mt-5">
      <UPagination v-model="page" :page-count="20" :total="total" :ui="{ rounded: 'first-of-type:rounded-s-md last-of-type:rounded-e-md' }">
    <template #prev="{ onClick }">
      <UTooltip text="Previous page">
        <UButton icon="i-heroicons-arrow-small-left-20-solid" color="primary" :ui="{ rounded: 'rounded-full' }" class="rtl:[&_span:first-child]:rotate-180 me-2" @click="prevPage" />
      </UTooltip>
    </template>

    <template #next="{ onClick }">
      <UTooltip text="Next page">
        <UButton icon="i-heroicons-arrow-small-right-20-solid" color="primary" :ui="{ rounded: 'rounded-full' }" class="rtl:[&_span:last-child]:rotate-180 ms-2" @click="nextPage" />
      </UTooltip>
    </template>
  </UPagination>
            </div>
        </div>
    </section>
</template>
