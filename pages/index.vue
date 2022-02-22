<template>
  <div
    class="bg-home-bg-mobile md:bg-home-bg-tablet lg:bg-home-bg-desktop text-white h-screen bg-cover bg-fixed bg-bottom"
  >
    <TheHeader />
    <main class="flex">
      <div class="lg:flex-row flex flex-col self-center">
        <div class="flex justify-center lg:text-left text-center">
          <div class="w-5/6 md:w-3/4 lg:w-1/2 md:pt-12">
            <div
              class="lg:text-heading-5 font-color-blueish font-barlow-condensed lg:tracking-big-spacing md:text-heading-5-tablet md:tracking-big-spacing-tablet text-heading-5-mobile"
            >
              SO, YOU WANT TO TRAVEL TO
            </div>
            <div class="md:text-heading-1 font-bellefair text-heading-1-mobile">
              SPACE
            </div>
            <div
              class="lg:text-regular-text font-color-blueish md:text-regular-text-tablet text-regular-text-mobile"
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 lg:mr-8">
          <div>
            <div class="flex justify-center my-20">
              <div
                class="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white text-black rounded-full flex justify-center items-center text-center lg:text-heading-4 font-bellefair explore text-heading-4-mobile"
              >
                EXPLORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
}
</script>

<style>
.explore {
  box-shadow: 0px 0px 0px 0px #979797;
  transition: box-shadow 0.1s linear;
}

.explore:hover {
  box-shadow: 0px 0px 0px 50px #979797;
}
</style>
