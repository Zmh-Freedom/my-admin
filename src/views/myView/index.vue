<script setup lang="ts">
import Chart2 from '@/views/myView/components/chart2.vue';
import { ref } from 'vue';
import BarChart2 from '@/views/myView/components/barChart2.vue';
import '@/assets/index.css';
const radio1 = ref(1);
</script>

<template>
  <div class="flex-col page">
    <span class="self-center text">子系统-车轮即轮胎</span>
    <div class="flex-row self-stretch group">
      <div class="flex-col items-center relative">
        <img
            class="image"
            src="@/assets/images/box.png"
        />
        <div class="box_1 box">
          <h2>
            行业市场规模
          </h2>
          <Chart2 class="chart_1 chart"></Chart2>
        </div>
      </div>
      <div class="flex-col items-center relative mt-300">
        <img
            class="image mt-23"
            src="@/assets/images/box.png"
        />
        <div class="box_2 box">
          <el-radio-group v-model="radio1" size="large" syle="width: 100px;height: 100px">
            <el-radio-button label="第一梯队" value=1 />
            <el-radio-button label="第二梯队" value=2 />
            <el-radio-button label="第三梯队" value=3 />
          </el-radio-group>
          <bar-chart2 class="chart" style="width: 450px;height: 220px;"></bar-chart2>
        </div>
      </div>
      <img
          class="image_2"
          src= "@/assets/images/box2.png"
      />
      <div class="flex-col items-center group_2">
        <img
            class="image"
            src= "@/assets/images/box3.png"
        />
        <img
            class="image mt-23"
            src="@/assets/images/box.png"
        />
      </div>
    </div>
    <div class="flex-row justify-center self-stretch group_3">
      <img
          class="image_3"
          src="@/assets/images/box.png"/>
      <img
          class="image ml-43"
          src="@/assets/images/box.png"
      />
      <img
          class="image ml-43"
          src="@/assets/images/box.png"
      />
    </div>
  </div>
</template>

<style scoped>
.mt-23 {
  margin-top: 23px;
}
.mt-300{
  margin-top: 300px;
}
.ml-43 {
  margin-left: 43px;
}
.page {
  padding: 36px 31px 51px;
  background-color: #000000;
  width: 100%;
  overflow-y: auto;
  overflow-x: auto;
  height: 100%;
}
.text {
  color: #ffffff;
  font-size: 36px;
  line-height: 33.5px;
}
.group {
  margin-top: 32px;
}
h2 {
  margin: 10px 0 0 30px;
  color: #ffffff;
}
.image {
  width: 474px;
  height: 294px;
  position: relative;
  z-index: 1;
}
.chart{
  background-color: #0C1439;
  z-index: 10;
}
.chart_1{
  width: 450px;
  height: 240px;
  z-index: 10;
}

.box{
  text-align: center;
  width: 470px;
  height: 290px;
  background-color: #0C1439;
  z-index: 1;
}
.box_1{
  position: absolute;
  margin-top: 2px;
}
.box_2{
  margin-top: 10px;
  position: absolute;
}
.image_2 {
  margin-left: 25px;
  width: 757px;
  height: 611px;
  position: relative;
  z-index: 2;
}
.group_2 {
  margin-left: 46px;
}
.group_3 {
  margin-top: 23px;
}
.image_3 {
  width: 742px;
  height: 294px;
  position: relative;
  z-index: 10
}
</style>
