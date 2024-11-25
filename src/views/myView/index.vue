<script setup lang="ts">
import Chart2 from '@/views/myView/components/chart2.vue';
import { ref } from 'vue';
import BarChart2 from '@/views/myView/components/barChart2.vue';
import '@/assets/index.css';
import MapChart from '@/views/myView/components/mapChart.vue';
const radio1 = ref(1);

</script>

<template>
  <div class="flex-col page container">
    <div class="self-start flex-col">
      <span class="self-center text" >子系统-车轮即轮胎</span>
      <div class="flex-row self-stretch group">
        <div class="flex-col">
          <div class="box">
            <img
                class="image"
                src="@/assets/images/box.png"
                style="position: absolute"
            />
            <div class="box_1">
              <h2>
                行业市场规模
              </h2>
              <Chart2 class="chart chart_1"></Chart2>
            </div>
          </div>
          <div class="box mt-23">
            <img
                class="image"
                src="@/assets/images/box.png"
                style="position: absolute"
            />
            <div class="box_2">
              <el-radio-group v-model="radio1" size="large" syle="width: 100px;height: 100px">
                <el-radio-button label="第一梯队" value=1 />
                <el-radio-button label="第二梯队" value=2 />
                <el-radio-button label="第三梯队" value=3 />
              </el-radio-group>
              <bar-chart2 class="chart index_3" style="width: 450px;height: 220px;"></bar-chart2>
            </div>
          </div>
        </div>
        <div class="box ml-27">
          <img
              class="image_2"
              src= "@/assets/images/box2.png"
          />
          <div class="box_3">
            <map-chart style="width: 450px;height: 350px;"></map-chart>
          </div>
        </div>
        <div class="flex-col items-center group_2">
          <div class="box">
            <img
                class="image"
                src= "@/assets/images/box3.png"
            />
            <div class="box_1">
            </div>
          </div>
          <div class="box mt-23">
            <img
                class="image"
                src="@/assets/images/box.png"
            />
            <div class="box_2">
            </div>
          </div>
        </div>
      </div>
      <div class="flex-row self-stretch group_3" >
        <div class="box">
          <img
              class="image_3"
              src="@/assets/images/box.png"/>
          <div class="box4">
          </div>
        </div>
        <div class="box ml-43">
          <img
              class="image"
              src="@/assets/images/box.png"
          />
          <div class="box_1"></div>
        </div>
        <div class="box ml-27">
          <img
              class="image"
              src="@/assets/images/box.png"
          />
          <div class="box_2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* 确保内容至少占满视窗高度 */
}
.mt-23 {
  margin-top: 23px;
}
.ml-27{
  margin-left: 27px;
}
.ml-43 {
  margin-left: 43px;
}
.index_3{
  z-index: 3;
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
  position: absolute;
  width: 474px;
  height: 294px;
  user-select: none;        /* 禁止选中 */
  pointer-events: none;     /* 禁用鼠标事件 */
  -webkit-user-drag: none;  /* 禁止拖动（Safari） */
}
.chart{
  background-color: #0C1439;
  z-index: 10;
}
.chart_1{
  width: 450px;
  height: 240px;
}

.box{
  background-color: #0C1439;
  position: relative;
  row-gap: 1.5em;
}
.box_1{
  text-align: center;
  width: 470px;
  height: 290px;
  padding: 10px;
}
.box_2{
  text-align: center;
  width: 470px;
  height: 290px;
  padding: 10px;
}
.box_3{
  width: 757px;
  height: 611px;
}
.box4{
  width: 742px;
  height: 294px;
}
.image_2 {
  width: 757px;
  height: 611px;
  position: absolute;
  z-index: 2;
  user-select: none;        /* 禁止选中 */
  pointer-events: none;     /* 禁用鼠标事件 */
  -webkit-user-drag: none;  /* 禁止拖动（Safari） */
}
.group_2 {
  margin-left: 27px;
}
.group_3 {
  margin-top: 23px;
}
.image_3 {
  width: 742px;
  height: 294px;
  position: absolute;
  z-index: 10
}
</style>
