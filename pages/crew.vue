/* eslint-disable no-debugger, no-console */
<template>
  <div
    class="bg-crew-bg-mobile md:bg-crew-bg-tablet lg:bg-crew-bg-desktop text-white lg:h-screen h-full bg-cover bg-fixed bg-bottom"
  >
    <TheHeader />
    <main class="w-5/6 mx-auto text-center lg:text-left grid content-center h-5/6">
      <div class="font-barlow-condensed md:text-left md:text-sheading-1 lg:text-heading-5 uppercase lg:tracking-big-spacing md:tracking-big-spacing-tablet tracking-medium-spacing">
        <span class="font-bold text-gray-600">02 </span>meet your crew
      </div>
      <div class="lg:flex">
        <div class="grid-cols-12 grid md:text-left flex flex-col lg:w-1/2">
          <div
            class="grid col-span-6 col-start-4 md:col-span-8 md:col-start-5 lg:col-span-10 lg:col-start-2"
          >
            <img
              class="pt-8 lg:px-8 h-56 md:hidden"
              :src="
                members.crew[`${$route.query.member}`].images
                  .webp
              "
            />
          </div>
        </div>
                    <div class="w-full  md:hidden border-gray-700 mb-8"></div>

        <div class="col-span-10  lg:w-1/2">
          <TheNavCrew class="md:hidden" />
          <div class="space-y-5 pb-5 md:space-y-0 md:flex md:justify-around lg:justify-start lg:space-x-12 ">
            <div class="space-y-2">
              <div
                class="font-bellefaire text-heading-5-mobile tracking-small-spacing uppercase font-color-blueish"
              >
                {{
                  members.crew[`${$route.query.member}`]
                    .role
                }}
              </div>
              <div class="font-bellefair text-sheading-1">
                {{
                  members.crew[`${$route.query.member}`]
                    .name
                }}
              </div>
            </div>
          </div>
          <div
            class="font-barlow text-regular-text pb-5 font-color-blueish lg:leading-regular-text"
          >
            {{
              members.crew[`${$route.query.member}`]
                .bio
            }}
          </div>
          <TheNavCrew class="md:block" />
        </div>
        <div
            class="hidden md:grid col-span-6 col-start-4 md:col-span-8 md:col-start-5 lg:col-span-10 lg:col-start-2"
          >
            <img
              class="pt-8 lg:px-8 md:w-2/3"
              :src="
                members.crew[`${$route.query.member}`].images
                  .webp
              "
            />
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
      this.$router.push({ query: {'member': "0"} });
      // this.$route.query.member = "0"
    }
  },
}
</script>

<style></style>
