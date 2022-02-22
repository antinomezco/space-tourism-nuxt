/* eslint-disable no-debugger, no-console */
<template>
  <div
    class="bg-destination-bg-mobile md:bg-destination-bg-tablet lg:bg-destination-bg-desktop text-white bg-cover"
  >
    <TheHeader />
    <main v-if="$route.query.celestialbody" class="w-5/6 mx-auto text-center lg:text-left">
      <div class="barlow-condensed font-header-mobile">
        <span class="tracking-widest font-bold text-gray-600">01 </span>Pick
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
          <div class="bellefair font-size-planet uppercase">
            {{ celestial.destinations[`${$route.query.celestialbody}`].name }}
          </div>
          <div
            class="barlow leading-loose font-regular-mobile pb-5 font-color-blueish"
          >
            {{
              celestial.destinations[`${$route.query.celestialbody}`]
                .description
            }}
          </div>
          <hr class="pt-5 hr-grayish" />
          <div class="space-y-5 pb-5 md:space-y-0 md:flex md:justify-around lg:justify-start lg:space-x-12">
            <div class="space-y-2">
              <div
                class="barlow-condensed uppercase font-size-planet-data-title font-color-blueish"
              >
                AVG. DISTANCE
              </div>
              <div class="bellefair font-size-planet-data-desc">
                {{
                  celestial.destinations[`${$route.query.celestialbody}`]
                    .distance
                }}
              </div>
            </div>
            <div class="space-y-2">
              <div
                class="barlow-condensed uppercase font-size-planet-data-title font-color-blueish"
              >
                Est. travel time
              </div>
              <div class="bellefair font-size-planet-data-desc">
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
      this.$route.query.celestialbody = "0"
    }
  },
}
</script>

<style></style>
