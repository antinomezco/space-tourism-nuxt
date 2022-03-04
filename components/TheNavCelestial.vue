<template>
  <nav class="px-2 sm:px-4 lg:px-0 py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto lg:mx-0 ">
      <div class="lg:mx-0 mx-auto">
        <ul class="flex flex-row font-barlow-condensed space-x-4 tracking-medium-spacing justify-center lg:justify-start">
          <li
            v-for="(celestial, index) in celestials.destinations"
            :key="index"
          >
            <nuxt-link
              :to="`?celestialbody=${index}`"
              class="deco font-color-blueish block pb-3"
            >{{ celestial.name }}</nuxt-link>
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
      celestials: data,
    }
  },
}
</script>

<style scoped>
.deco {
  display: inline-block;
  position: relative;
}

.deco:hover {
  color: #979797;
}

.deco:hover:after {
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #979797;
  content: "";
  position: absolute;
  width: 100%;
}

.nuxt-link-exact-active {
  color: white;
}

.nuxt-link-exact-active:after {
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  content: "";
  position: absolute;
  width: 100%;
}
</style>