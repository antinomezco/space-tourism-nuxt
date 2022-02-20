<template>
  <header class="flex justify-between p-5">
    <a href="/"><img src="/images/shared/logo.svg" alt="" /></a>

    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box uppercase text-white font-header-mobile barlow-condensed">
        <li><nuxt-link class="menu__item" to="/"><span class="font-bold">00 </span>Home</nuxt-link></li>
        <li><nuxt-link class="menu__item" to="destination"><span class="font-bold">01 </span>Destination</nuxt-link></li>
        <li><a class="menu__item" href="#"><span class="font-bold">02 </span>Crew</a></li>
        <li><a class="menu__item" href="#"><span class="font-bold">03 </span>Technology</a></li>
      </ul>
    </div>

    <!-- <Slide right class="p-3">
    </Slide> -->
  </header>
</template>

<script>
export default {
}
</script>

<style>
#menu__toggle {
  opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  right: 0 !important;
}
.menu__btn {
  position: fixed;
  top: 40px;
  right: 30px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #D0D6F9;
  transition-duration: 0.25s;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}
.menu__box {
  display: block;
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: rgba(0, 0, 0, 0.95);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  transition-duration: 0.25s;
}
.menu__item {
  display: block;
  padding: 12px 32px;
  text-decoration: none;
  transition-duration: 0.25s;
}
.menu__item:hover {
  background-color: #cfd8dc;
}
</style>
