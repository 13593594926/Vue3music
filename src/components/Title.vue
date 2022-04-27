<template>
  <section class="title">
    <h2>
      {{ title }}
    </h2>
  </section>
</template>

<script setup="props" lang="ts">
interface Props {
  foo: string;
  bar: string[];
  // 可选的props属性
  baz?: boolean | string;
}
defineProps<{ title: string }>();
</script>

<style scoped lang="less">
.title {
  padding-top: 0.15rem;
  h2 {
    position: relative;
    font-size: 0.34rem;
    height: 0.6rem;
    line-height: 0.6rem;
    padding-left: 0.18rem;
    &::after {
      content: " ";
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -0.18rem;
      height: 0.32rem;
      width: 0.04rem;
      background-color: #d33a31;
    }
  }
}
</style>
