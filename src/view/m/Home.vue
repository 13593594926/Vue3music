<template>
  <section>
    <van-sticky>
      <div class="top">
        <div class="title">
          <van-icon name="friends" />
          网易云音乐
        </div>
        <div>
          <van-button round> 下载APP</van-button>
        </div>
      </div>
      <van-tabs v-model:active="activeName">
        <van-tab title="推荐音乐" name="Recommended"></van-tab>
        <van-tab title="热歌榜" name="Hot"></van-tab>
        <van-tab title="搜索" name="Search"></van-tab>
      </van-tabs>
    </van-sticky>
    <component :is="component[activeName]" />
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, shallowRef } from "vue";
import Recommended from "../m/recommended.vue";
import Hot from "../m/hot.vue";
import Search from "../m/search.vue";
const component = shallowRef({ Recommended, Hot, Search });
const activeName = ref("Recommended");
</script>

<style scoped lang="less">
.top {
  background: #d43c33;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.68rem;
  padding: 0.1rem;
  .title {
    color: #fff;
    font-size: 0.5rem;
  }
}
</style>
