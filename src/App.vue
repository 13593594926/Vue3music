<template>
  <section>
    <van-config-provider :theme-vars="themeVars">
      <router-view />
    </van-config-provider>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
const themeVars = ref({
  rateIconFullColor: "#07c160",
  sliderBarHeight: "4px",
  sliderButtonWidth: "20px",
  sliderButtonHeight: "20px",
  sliderActiveBackgroundColor: "#07c160",
  buttonPrimaryBorderColor: "#07c160",
  buttonPrimaryBackgroundColor: "#07c160",
  buttonColor: "#d43c33",
});
</script>

<style lang="less">
#app {
  height: 100%;
  .van-button--default {
    color: #d43c33;
  }
}
</style>
