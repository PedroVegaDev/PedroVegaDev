<script setup>
import { ref } from 'vue';

const menuitems = [
  {
    title: "Servicios",
    path: "#servicios",
  },
  {
    title: "Tecnologías",
    path: "#tecnologias",
  },
  {
    title: "Proceso",
    path: "#proceso",
  },
  {
    title: "Contáctame",
    path: "#contactame",
  },
];

const isOpenMenu = ref(false);
</script>

<template>
  <header class="flex flex-col lg:flex-row justify-between items-center my-5">
    <div class="flex w-full lg:w-auto items-center justify-between">
      <a href="/" class="text-lg">
        <span class="font-bold text-slate-800">Pedro</span>
        <span class="text-slate-500">Vega</span>
      </a>
      <div class="block lg:hidden">
        <button @click="isOpenMenu = !isOpenMenu" class="text-gray-800">
          <svg fill="currentColor" class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path v-show="isOpenMenu" fill-rule="evenodd" clip-rule="evenodd"
              d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z">
            </path>
            <path v-show="!isOpenMenu" fill-rule="evenodd"
              d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z">
            </path>
          </svg>
        </button>
      </div>
    </div>
    <nav class="w-full lg:w-auto mt-2 lg:flex lg:mt-0" :class="{ block: isOpenMenu, hidden: !isOpenMenu }">
      <ul class="flex flex-col lg:flex-row lg:gap-3">
        <li v-for="item of menuitems" :key="item.title" @click="isOpenMenu = false">
          <a :href="item.path" class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
