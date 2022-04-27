<template>
  <!-- 推荐音乐 -->
  <section>
    <div class="personalized">
      <Title title="编辑推荐" />
      <van-grid :column-num="3" :border="false">
        <van-grid-item
          v-for="item in personalizedData"
          :key="item.id"
          icon="photo-o"
        >
          <van-image :src="item.picUrl" />
          <!-- <van-img></van-img> -->
          <p>{{ item.name }}</p>
          <span class="playCount">
            <van-icon name="service" />
            {{ playCount(item.playCount) }}
          </span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="personalizedNewsong">
      <Title title="最新音乐" />
      <van-list>
        <van-cell v-for="item in personalizedNewsongData" :key="item.id">
          <div>
            <h3>{{ item.name }}</h3>
            <p class="artists">
              {{ artists(item.song) }} {{ album(item.song) }}
            </p>
          </div>
          <van-icon name="play-circle-o" />
        </van-cell>
      </van-list>
    </div>
    <footer>
      <div class="ftwrap">
        <div class="logo">
          <van-icon name="friends" color="#red" />
          网易云音乐
        </div>
        <van-button plain type="danger" round
          >打开APP，发现更多好音乐 &gt;</van-button
        >
        <p class="copyright">
          网易公司版权所有©1997-2022 杭州乐读科技有限公司运营
        </p>
      </div>
    </footer>
  </section>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps, defineExpose } from "vue";
import { personalized, personalizedNewsong } from "./request";
const props = defineProps({});
const personalizedData: any = ref([]);
const personalizedNewsongData: any = ref([]);
const getList = async () => {
  const res: any = await personalized();
  personalizedData.value = res.result;
};
const getNewsong = async () => {
  const res: any = await personalizedNewsong();
  personalizedNewsongData.value = res.result;
};
const init = () => {
  getList();
  getNewsong();
};
const playCount = (value: number) => {
  if (value >= 100_000_000) {
    return (value / 100_000_000).toFixed(1) + "亿";
  } else if (value >= 10_000) {
    return (value / 100_000).toFixed(1) + "万";
  } else {
    return value;
  }
};
const artists = (data: any) => {
  return data.artists.map((i: any) => i.name).join(" / ");
};
const album = (data: any) => {
  return "- " + data.album.name;
};
init();
defineExpose({
  personalizedData,
  personalizedNewsongData,
});
</script>

<style scoped lang="less">
.personalized {
  .van-grid {
    justify-content: space-between;
    /deep/.van-grid-item {
      flex-basis: 32.3333% !important;
      .van-grid-item__content {
        padding: 0.1rem 0;
        display: inline-block;
        position: relative;
        p {
          padding: 0.03rem 0.01rem 0 0.05rem;
        }
        .playCount {
          color: #fff;
          position: absolute;
          right: 0.15rem;
          top: 0.15rem;
        }
      }
    }
  }
}
.personalizedNewsong {
  .van-cell {
    padding: 0.1rem 0.16rem;
    /deep/.van-cell__value {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        width: 0;
        flex: 1;
        .artists {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: normal;
          font-size: 12px;
          color: #888;
        }
      }
      .van-icon {
        color: #888;
        font-size: 0.5rem;
      }
    }
  }
}
footer {
  background-image: url("https://s3.music.126.net/mobile-new/img/recommand_bg_3x.png?f3a9aaa781c3bf3b543d129327d35fce=");
  background-size: contain;
  .ftwrap {
    text-align: center;
    .logo {
      padding-top: 17%;
      color: #000;
      font-size: 0.5rem;
    }
    .van-button {
      margin: 0.1rem 0;
    }
    .copyright {
      font-size: 0.06rem;
      color: #888;
      line-height: 0.32rem;
      padding-bottom: 0.1rem;
    }
  }
}
</style>
