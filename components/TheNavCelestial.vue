<template>
  <nav class="px-2 sm:px-4 lg:px-0 py-2.5">
  <div class="container flex flex-wrap justify-between items-center mx-auto lg:mx-0 ">
    <div class="lg:mx-0 mx-auto">
      <ul class="flex flex-row font-barlow-condensed space-x-4 tracking-medium-spacing justify-center lg:justify-start">
        <li v-for="(celestial, index) in celestials.destinations" :key="index">
          <nuxt-link :to="`?celestialbody=${index}`" class="hover-underline-animation font-color-blueish block pb-3 hover:text-white transition duration-300 active:text-white">{{ celestial.name }}</nuxt-link>
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

<style>
a.nuxt-link-exact-active:after {
  border-bottom: 2px white #32557f;
  color: white
}


/* a.nuxt-link-exact-active:after  {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
} */

.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: white
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform-origin: bottom center;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom center;
}

</style>