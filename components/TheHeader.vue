<template>
  <header class="flex lg:justify-center md:justify-between relative pt items-center lg:pt-5 font-barlow tracking-medium-spacing">
    <a href="/" class="md:px-8 p-5"><img class="image-size" src="/images/shared/logo.svg" alt="" /></a>

    <div class="hidden lg:flex line-1 -mr-12"></div>

    <div>
      <ul class="hidden md:flex header-tablet text-white font-size-planet-data-title uppercase barlow-condensed flex flex-row lg:px-8">
        <li v-for="link in links" :key=link.link_to class="mx-7 lg:my-9 md:my-4">
          <nuxt-link class="flex nav-text" :to=link.link_to>
            <span class="font-bold md:hidden lg:inline">{{link.link_number}}</span>&nbsp;&nbsp;{{link.link_name}}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="hamburger-menu md:hidden">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box uppercase text-white font-header-mobile barlow-condensed">
        <li v-for="link in links" :key=link.link_to>
          <nuxt-link class="menu__item" :to=link.link_to>
            <span class="font-bold">{{link.link_number}} </span>{{link.link_name}}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <!-- <Slide right class="p-3">
    </Slide> -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {link_to: "/", link_name: "Home", link_number: "00 "},
        {link_to: "destination", link_name: "Destination", link_number: "01 "},
        {link_to: "crew", link_name: "Crew", link_number: "02 "},
        {link_to: "technology", link_name: "Technology", link_number: "03  "},
      ]
    }
  }
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
  position: absolute;
  top: 40px;
  right: 30px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 2;
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
  z-index: 1;
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

.header-tablet {
  background-color: rgba(151, 151, 151, 0.15);
}

.line-1 {
  height: 1px;
  width:70%;
  background: rgba(151, 151, 151, 0.35)
}

.image-size {
  min-height: 48px;
  min-width: 48px;
}
</style>
