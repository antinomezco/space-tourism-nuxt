/* eslint-disable no-debugger, no-console */
<template>
  <div class="bg-crew-bg-mobile md:bg-crew-bg-tablet lg:bg-crew-bg-desktop text-white md:h-full h-screen bg-cover bg-scroll bg-bottom">
    <TheHeader />
    <main class="static container mx-auto">
      <div class="grid grid-cols-12 gap-6 lg:grid-flow-col lg:grid-row-5 lg:content-center">

        <div class="grid col-span-10 col-start-2 lg:col-span-12 lg:col-start-3 py-8">
          <h1 class="flex justify-center text-heading-4-mobile text-center md:block font-barlow-condensed md:text-left md:heading-5-tablet lg:text-heading-5 uppercase lg:tracking-big-spacing md:tracking-big-spacing-tablet tracking-medium-spacing">
            <span class="font-bold text-gray-600">02&nbsp;</span>meet your crew
          </h1>
        </div>

        <div class="md:text-left grid col-span-6 col-start-4 md:order-3 md:col-span-10 md:col-start-3 lg:col-span-4 lg:row-span-5">
          <div class="">
            <img
              class="pt-8 lg:mx-8"
              :src=" members.crew[`${$route.query.member}`].images.webp"
            />
          </div>
        </div>

        <hr class="col-span-10 col-start-2 block md:hidden border-gray-700 h-5" style="margin-top:-1.5rem;" />

        <TheNavCrew class="col-span-10 col-start-2 md:order-2 lg:col-span-6 lg:col-start-3 lg:text-left" />

        <div class="col-span-10 col-start-2 text-center pt-5 lg:self-end space-y-5 pb-5 md:space-y-0 lg:space-x-12 lg:col-span-10 lg:col-start-3 lg:text-left">
          <div class="space-y-2">
            <div class="font-bellefair text-gray-500 text-heading-5-mobile lg:text-heading-4 md:text-heading-5-tablet-24 tracking-small-spacing uppercase">
              {{
                  members.crew[`${$route.query.member}`]
                    .role
                }}
            </div>
            <div class="font-bellefair text-sheading-1 md:text-sheading-1-40 lg:text-heading-2">
              {{
                  members.crew[`${$route.query.member}`]
                    .name
                }}
            </div>
          </div>
        </div>

        <div class="col-span-10 col-start-2 text-center font-barlow text-regular-text pb-5 font-color-blueish md:text-regular-text-tablet lg:text-regular-text md:leading-regular-text-tablet lg:leading-regular-text lg:col-span-6 lg:col-start-3 lg:text-left">
          {{
              members.crew[`${$route.query.member}`]
                .bio
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
      members: data,
    }
  },
  beforeCreate() {
    if (!this.$route.query.member) {
      this.$router.push({ query: { member: "0" } })
      // this.$route.query.member = "0"
    }
  },
}
</script>

<style></style>
