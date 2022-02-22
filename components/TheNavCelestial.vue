<template>
  <nav class="px-2 sm:px-4 py-2.5">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <div class="w-full">
      <ul class="flex flex-row mx-4 font-barlow tracking-medium-spacing justify-center lg:justify-start">
        <li>
          <nuxt-link to="?celestialbody=0" class="hover-underline-animation font-color-blueish block py-2 pr-4 pl-3 hover:text-white transition duration-300 active:text-white">Moon</nuxt-link>
        </li>
        <li>
          <nuxt-link to="?celestialbody=1" class="hover-underline-animation font-color-blueish block py-2 pr-4 pl-3 hover:text-white transition duration-300 active:text-white">Mars</nuxt-link>
        </li>
        <li>
          <nuxt-link to="?celestialbody=2" class="hover-underline-animation font-color-blueish block py-2 pr-4 pl-3 hover:text-white transition duration-300 active:text-white">Titan</nuxt-link>
        </li>
        <li>
          <nuxt-link to="?celestialbody=3" class="hover-underline-animation font-color-blueish block py-2 pr-4 pl-3 hover:text-white transition duration-300 active:text-white">Europa</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

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