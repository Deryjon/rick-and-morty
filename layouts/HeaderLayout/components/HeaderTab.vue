<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeTab = ref('characters');

const selectTab = (tab: string) => {
  activeTab.value = tab;
  router.push(`/${tab}`);
};
</script>
<template>
    <div class="flex space-x-4 text-lg">
      <router-link
        to="/"
        class="tab"
        :class="{ 'active-tab': activeTab === 'characters' }"
        @click="selectTab('')"
      >
        Characters
      </router-link>
      <!-- <router-link
        to="/episodes"
        class="tab"
        :class="{ 'active-tab': activeTab === 'episodes' }"
        @click="selectTab('episodes')"
      >
        Episodes
      </router-link>
      <router-link
        to="/locations"
        class="tab"
        :class="{ 'active-tab': activeTab === 'locations' }"
        @click="selectTab('locations')"
      >
        Locations
      </router-link> -->
    </div>
  </template>
  
  
  <style scoped>
  .tab {
    cursor: pointer;
    padding: 8px 16px;
    border-bottom: 2px solid transparent;
  }
  
  .active-tab {
    border-bottom-color: blue;
  }
  </style>
  