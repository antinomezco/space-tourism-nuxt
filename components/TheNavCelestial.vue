<template>
  <nav class="px-2 sm:px-4 py-2.5">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <div class="w-full">
      <ul class="flex flex-row mx-4 barlow font-size-planet-data-title justify-center">
        <li class="header__option">
          <nuxt-link to="?celestialbody=0" class="font-color-blueish block py-2 pr-4 pl-3 hover:text-white transition duration-300 active:text-white">Moon</nuxt-link>
        </li>
        <li>
          <nuxt-link to="?celestialbody=1" class="font-color-blueish block py-2 pr-4 pl-3 hover:text-white transition duration-300 active:text-white">Mars</nuxt-link>
        </li>
        <li>
          <nuxt-link to="?celestialbody=2" class="font-color-blueish block py-2 pr-4 pl-3 hover:text-white transition duration-300 active:text-white">Titan</nuxt-link>
        </li>
        <li>
          <nuxt-link to="?celestialbody=3" class="font-color-blueish block py-2 pr-4 pl-3 hover:text-white transition duration-300 active:text-white">Europa</nuxt-link>
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
.header__option{
position: relative;
}
.header__option::hover{
content:'';
position: absolute;
bottom: -10px;
left: 0;
width: 100%;
height: 1px;
background: red;
}

</style>