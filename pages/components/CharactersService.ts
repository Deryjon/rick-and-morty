import { ref, watch } from "vue";
import { useFetch } from "@vueuse/core";
import { base_url } from "~/api";


export const useCharacterService = () => {
  let characters = ref<{ id: number, name: string, status: string, species: string, type: string, gender: string, episode: string[], image: string, location: { name: string, url: string }, origin: { name: string, url: string } }[]>([]);
  let total = ref(0);
  let searchName = ref("");
  let searchStatus = ref("");
  let searchSpecies = ref("");
  let searchGender = ref("");
  let searchPage = ref(1);

  const setSearchName = (name: string) => {
    searchName.value = name;  
    fetchCharacters();
  }
  const setSearchStatus = (status: string) => {
    searchStatus.value = status;  
    fetchCharacters()
  }
  const setSearchSpecies = (status: string) => {
    searchSpecies.value = status;  

  }
  const setSearchGender = (status: string) => {
    searchGender.value = status;  

  }

  const setSearchPage =  (page: number) => {
    searchPage.value = page
    fetchCharacters()}
  const fetchCharacters = async () => {
    const { data } = await useFetch(
      `${base_url}/character?page=${searchPage.value}&name=${searchName.value}&status=${searchStatus.value}`,
      {
        method: "GET",
      }
    ).json();
      characters.value = data.value.results;
    total.value = data.value.info.count;
    console.log(data.value.info.count)
  };
  

  return {
    characters,
    fetchCharacters,
    total,
    searchName,
    searchStatus,
    searchSpecies,
    searchGender,
    searchPage,
    setSearchName,
    setSearchStatus,
    setSearchSpecies,
    setSearchGender,
    setSearchPage,
  };
};
