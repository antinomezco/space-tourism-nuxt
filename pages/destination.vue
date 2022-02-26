/* eslint-disable no-debugger, no-console */
<template>
  <div
    class="bg-destination-bg-mobile md:bg-destination-bg-tablet lg:bg-destination-bg-desktop text-white lg:h-screen h-full bg-cover bg-fixed bg-bottom"
  >
    <TheHeader />
    <main v-if="$route.query.celestialbody" class="w-5/6 mx-auto text-center lg:text-left grid content-center h-5/6">
      <div class="font-barlow-condensed md:text-left md:text-sheading-1 lg:text-heading-5 uppercase lg:tracking-big-spacing md:tracking-big-spacing-tablet tracking-medium-spacing">
        <span class="font-bold text-gray-600">01 </span>Pick
        your destination
      </div>
      <div class="lg:flex">
        <div class="grid-cols-12 grid md:text-left flex flex-col lg:w-1/2">
          <div
            class="grid col-span-6 col-start-4 md:col-span-4 md:col-start-5 lg:col-span-10 lg:col-start-2"
          >
            <img
              class="py-8 lg:px-8"
              :src="
                celestial.destinations[`${$route.query.celestialbody}`].images
                  .webp
              "
            />
          </div>
        </div>
        <div class="col-span-10  lg:w-1/2">
          <TheNavCelestial />
          <div class="font-bellefair text-heading-3 md:text-heading-1-mobile lg:text-heading-2 uppercase">
            {{ celestial.destinations[`${$route.query.celestialbody}`].name }}
          </div>
          <div
            class="font-barlow text-regular-text pb-5 font-color-blueish lg:leading-regular-text"
          >
            {{
              celestial.destinations[`${$route.query.celestialbody}`]
                .description
            }}
          </div>
          <div class="w-full border-t border-gray-700 my-8"></div>
          <div class="space-y-5 pb-5 md:space-y-0 md:flex md:justify-around lg:justify-start lg:space-x-12 ">
            <div class="space-y-2">
              <div
                class="font-barlow-condensed text-sheading-2 tracking-small-spacing uppercase font-color-blueish"
              >
                AVG. DISTANCE
              </div>
              <div class="font-bellefair text-sheading-1">
                {{
                  celestial.destinations[`${$route.query.celestialbody}`]
                    .distance
                }}
              </div>
            </div>
            <div class="space-y-2">
              <div
                class="font-barlow-condensed text-sheading-2 tracking-small-spacing uppercase font-color-blueish"
              >
                Est. travel time
              </div>
              <div class="font-bellefair text-sheading-1">
                {{
                  celestial.destinations[`${$route.query.celestialbody}`].travel
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div v-else>
      {{ $route.query.celestialbody }}
    </div>
  </div>
</template>

<script>
import data from "../static/data/data.json"
export default {
  data() {
    return {
      celestial: data,
    }
  },
  beforeCreate() {
    if (!this.$route.query.celestialbody) {
      this.$router.push({ query: {'celestialbody': "0"} });
      // this.$route.query.celestialbody = "0"
    }
  },
}
</script>

<style></style>
