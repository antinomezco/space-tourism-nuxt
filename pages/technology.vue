/* eslint-disable no-debugger, no-console */
<template>
  <div class="bg-tech-bg-mobile md:bg-tech-bg-tablet lg:bg-tech-bg-desktop text-white h-screen lg:h-full bg-cover bg-fixed bg-bottom">
    <TheHeader />
    <main class="static mx-auto">
      <div class="grid grid-cols-12 gap-6 lg:grid-flow-col lg:grid-row-5 lg:content-center lg:pb-8">

        <div class="grid col-span-10 col-start-2 lg:col-span-12 lg:col-start-2 py-8">
          <h1 class="flex justify-center text-heading-4-mobile text-center md:block font-barlow-condensed md:text-left md:heading-5-tablet lg:text-heading-5 uppercase lg:tracking-big-spacing md:tracking-big-spacing-tablet tracking-medium-spacing">
            <span class="font-bold text-gray-600">03&nbsp;</span>Space launch 101
          </h1>
        </div>

        <div class="grid col-span-12 col-start-0 lg:col-span-6 lg:row-span-5 lg:col-start-9 lg:justify-end">
          <img
            class="w-full lg:hidden"
            :src=" spaceship.technology[`${$route.query.tech}`].images.landscape"
          />
          <img
            class="hidden lg:block mb-9"
            :src=" spaceship.technology[`${$route.query.tech}`].images.portrait"
          />
        </div>

        <TheNavTech class="col-span-10 col-start-2 lg:col-span-1 lg:col-start-2 lg:row-span-3 lg:row-start-3" />

        <div class="col-span-10 col-start-2 text-center pt-5 lg:self-end space-y-5 md:space-y-0 lg:space-x-12 lg:col-span-4 lg:col-start-3 lg:row-start-4 lg:text-left">
          <div class="space-y-8">
            <div class="font-barlow-condensed text-sheading-2 font-color-blueish tracking-small-spacing md:regular-text-tablet uppercase ">
              The terminology...
            </div>
            <div class="font-bellefair text-heading-5-tablet-24 md:text-sheading-1-40 lg:leading-regular-text lg:text-heading-3 uppercase">
              {{
                  spaceship.technology[`${$route.query.tech}`]
                    .name
                }}
            </div>
          </div>
        </div>

        <div class="lg:row-start-5 col-span-10 col-start-2 text-center font-barlow regular-text-mobile leading-regular-text-mobile pb-5 font-color-blueish md:text-regular-text-tablet lg:text-regular-text md:leading-regular-text-tablet lg:leading-regular-text lg:col-span-4 lg:col-start-3 lg:text-left">
          {{
              spaceship.technology[`${$route.query.tech}`]
                .description
            }}
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
      spaceship: data,
    }
  },
  beforeCreate() {
    if (!this.$route.query.tech) {
      this.$router.push({ query: { tech: "0" } })
      // this.$route.query.tech = "0"
    }
  },
}
</script>

<style scoped></style>
