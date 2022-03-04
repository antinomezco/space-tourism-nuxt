<template>
  <nav class="px-2 sm:px-4 lg:px-0 py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto lg:mx-0 ">
      <div class="lg:mx-0 mx-auto">
        <ul class="flex flex-row font-barlow-condensed space-x-4 lg:space-x-0 lg:space-y-5 tracking-medium-spacing justify-center lg:justify-start lg:flex-col">
          <li
            v-for="(tech, index) in data.technology"
            :key="index"
          >
            <nuxt-link
              :to="`?tech=${index}`"
              class="circle-fill font-color-blueish block pb-3 text-heading-4 font-bellefair"
            >{{ index+1 }}</nuxt-link>
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
      data,
    }
  },
}
</script>

<style scoped>
.circle-fill {
  border-radius: 50%;
  width: 75px;
  height: 75px;
  padding: 13px;
  border: 2px solid #979797;
  color: white;
  text-align: center;
}

.circle-fill:hover {
  border: 2px solid white;
}

.nuxt-link-exact-active {
  background: #fff;
  color: black;
}
</style>