<script lang="ts" setup>
import { useFetch } from "@vueuse/core";
import { base_url } from "~/api";
const episodes = ref({})
const episodeId = ref(1)
 const fetchEpisodes = async () => {
    const { data } = await useFetch(
      `${base_url}/episode/${episodeId.value}`,
      {
        method: "GET",
      }
    ).json();
    console.log(data.value)
    episodes.value = data.value;
    // total.value = data.value.total;
  };
  
  onMounted(() => {
    fetchEpisodes();
  })
</script>
<template>
    <section class="episodes">
        <div class="container mx-auto mt-10">
            <div class="">

                <h2 class="text-3xl text-center ">Episode name : {{ episodes.value.name }}</h2>
                <p></p>
            </div>
            <!-- <div class="cards flex gap-5 flex-wrap">
                        <div class="card w-[300px] border rounded-2xl relative" v-for="item in episodes"
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

                    </div>-->   
        </div> 
    </section>
</template>
