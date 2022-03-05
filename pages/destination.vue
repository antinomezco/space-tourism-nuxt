/* eslint-disable no-debugger, no-console */
<template>
  <div
    class="bg-destination-bg-mobile md:bg-destination-bg-tablet lg:bg-destination-bg-desktop text-white md:h-full h-full bg-cover bg-scroll bg-bottom"
  >
    <TheHeader />
    <main class="static  mx-auto">
      <div class="grid grid-cols-12 gap-6 lg:grid-flow-col lg:grid-row-5 lg:content-center">

        <div class="grid col-span-10 col-start-2 lg:col-span-12 lg:col-start-2 py-8">
          <h1 class="flex justify-center text-heading-4-mobile text-center md:block font-barlow-condensed md:text-left md:heading-5-tablet lg:text-heading-5 uppercase lg:tracking-big-spacing md:tracking-big-spacing-tablet tracking-medium-spacing">
            <span class="font-bold text-gray-600">01&nbsp;</span>Pick your destination
          </h1>
        </div>

        <div class="grid col-span-6 col-start-4 md:col-span-12 md:mx-auto lg:col-span-6 lg:row-span-4 lg:col-start-1 lg:row-start-3">
          <div class="md:w-1/2 md:mx-auto lg:w-full">
            <img
              class="pt-8 lg:px-8"
              :src=" celestial.destinations[`${$route.query.celestialbody}`].images.webp"
            />
          </div>
        </div>

        <TheNavCelestial class="col-span-10 col-start-2 lg:col-span-4 lg:col-start-8 lg:text-left" />

        <div class="col-span-10 col-start-2 text-center pt-5 lg:self-end space-y-5 pb-5 md:space-y-0 lg:space-x-12 lg:col-span-4 lg:col-start-8 lg:text-left">
          <div class="space-y-2">
            <div class="font-bellefair text-heading-3 md:text-heading-1-mobile lg:text-heading-2 uppercase">
              {{
                  celestial.destinations[`${$route.query.celestialbody}`]
                    .name
                }}
            </div>
            <div class="font-barlow text-regular-text pb-5 font-color-blueish lg:leading-regular-text">
              {{
                  celestial.destinations[`${$route.query.celestialbody}`]
                    .description
                }}
            </div>
          </div>
        </div>

        <div class="col-span-10 col-start-2 border-t border-gray-700 my-8 lg:col-span-4 lg:col-start-8"></div>

        <div class="col-span-10 grid-cols-4 text-center lg:text-left mx-auto lg:mx-0 col-start-2 grid-flow-row grid gap-3 md:gap-12 pb-5 lg:col-span-4 lg:col-start-8">
            <div class="space-y-2 col-span-4 lg:col-span-2">
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
            <div class="space-y-2 col-span-4 lg:col-span-2">
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
    </main>
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
