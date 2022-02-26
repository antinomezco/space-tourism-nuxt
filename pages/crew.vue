/* eslint-disable no-debugger, no-console */
<template>
  <div
    class="bg-crew-bg-mobile md:bg-crew-bg-tablet lg:bg-crew-bg-desktop text-white lg:h-screen h-full bg-cover bg-fixed bg-bottom"
  >
    <TheHeader />
    <main>
      <div class="flex justify-center md:justify-start md:py-6 md:pl-8 font-barlow-condensed md:text-left md:heading-5-tablet lg:text-heading-5 uppercase lg:tracking-big-spacing md:tracking-big-spacing-tablet tracking-medium-spacing">
        <span class="font-bold text-gray-600">02&nbsp;</span>meet your crew
      </div>
      <div  class="w-5/6 md:w-3/5 mx-auto text-center lg:text-left grid content-center h-5/6">
      <div class="lg:flex">
        <div class="grid-cols-12 grid md:text-left flex flex-col lg:w-1/2">
          <div
            class="grid col-span-6 col-start-4 md:col-span-8 md:col-start-5 lg:col-span-10 lg:col-start-2"
          >
            <img
              class="pt-8 lg:px-8 md:hidden "
              :src="
                members.crew[`${$route.query.member}`].images
                  .webp
              "
            />
          </div>
        </div>
                    <div class="w-full block md:hidden border-gray-700 mb-8"></div>

        <div class="col-span-10  lg:w-1/2">
          <TheNavCrew class="md:hidden" />
          <div class="space-y-5 pb-5 md:space-y-0 md:flex md:justify-around lg:justify-start lg:space-x-12 ">
            <div class="space-y-2">
              <div
                class="font-bellefair text-gray-500 text-heading-5-mobile md:text-heading-5-tablet-24 tracking-small-spacing uppercase"
              >
                {{
                  members.crew[`${$route.query.member}`]
                    .role
                }}
              </div>
              <div class="font-bellefair text-sheading-1 md:text-sheading-1-40">
                {{
                  members.crew[`${$route.query.member}`]
                    .name
                }}
              </div>
            </div>
          </div>
          <div
            class="font-barlow text-regular-text pb-5 font-color-blueish md:text-regular-text-tablet md:leading-regular-text-tablet lg:leading-regular-text"
          >
            {{
              members.crew[`${$route.query.member}`]
                .bio
            }}
          </div>
          <TheNavCrew class="md:block hidden" />
        </div>
        <div
            class="hidden md:grid col-span-6 col-start-4 md:col-span-8 md:col-start-5 lg:col-span-10 lg:col-start-2"
          >
            <img
              class="pt-8 lg:px-8 mx-auto mt-7"
              :src="
                members.crew[`${$route.query.member}`].images
                  .webp
              "
            />
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
