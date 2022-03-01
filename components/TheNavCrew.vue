<template>
  <nav class="px-2 sm:px-4 lg:px-0 py-2.5">
  <div class="container flex flex-wrap justify-between items-center mx-auto lg:mx-0 ">
    <div class="lg:mx-0 mx-auto">
      <ul class="flex flex-row space-x-4  justify-center ">
        <li v-for="(member, index) in members.crew" :key="index">
          <nuxt-link :to="`?member=${index}`" class="circle block pb-3 bg-gray-600 "></nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

import data from "../static/data/data.json"
export default {
  data() {
    return {
      members: data,
    }
  },
}
</script>

<style scoped>
.circle {
  height: 15px;
  width: 15px;
  /* background-color: #555; */
  border-radius: 50%;
}

.circle:hover {
    background-color: gray;
}

.nuxt-link-exact-active {
    background-color: white;
}
</style>