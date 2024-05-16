import { ref, watch } from "vue";
import { useFetch } from "@vueuse/core";
import { base_url } from "~/api";


export const useCharacterService = () => {
  let characters = ref<{ id: number, name: string, status: string, species: string, type: string, gender: string, episode: string[], image: string, location: { name: string, url: string }, origin: { name: string, url: string } }[]>([]);
  let total = ref(0);

  const fetchCharacters = async () => {
    const { data } = await useFetch(
      `${base_url}/character?page=1&name=&status=&gender=&species=`,
      {
        method: "GET",
      }
    ).json();
    console.log(data.value)
    characters.value = data.value.results;
    // total.value = data.value.total;
  };
  

  return {
    characters,
    fetchCharacters,
    total,
  };
};
