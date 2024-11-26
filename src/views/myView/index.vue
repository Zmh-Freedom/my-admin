<script setup lang="ts">
import Chart2 from '@/views/myView/components/chart2.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import '@/assets/index.css';
import MapChart from '@/views/myView/components/mapChart.vue';
import PieChart1 from '@/views/myView/components/pieChart1.vue';
import PieChart2 from '@/views/myView/components/pieChart2.vue';
import PieChart3 from '@/views/myView/components/pieChart3.vue';
import PieChart4 from '@/views/myView/components/pieChart4.vue';
import BarChart1 from '@/views/myView/components/barChart1.vue';
import BarChart2 from '@/views/myView/components/barChart2.vue';
import BarChart3 from '@/views/myView/components/barChart3.vue';
const radio1 = ref(1);
const tableData = [
  {
    date: '2024年6月9日',
    source: '盖世汽车',
    news: '韩泰推出新款夏季轮胎iON GT 专为紧凑型电动汽车打造'
  },
  {
    date: '2024年9月3日',
    source: '盖世汽车',
    news: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2024年9月3日',
    source: '盖世汽车',
    news: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2024年9月3日',
    source: '盖世汽车',
    news: 'No. 189, Grove St, Los Angeles'
  }
];

const container = ref<HTMLDivElement | null>(null); // 指定类型

const scalePage = () => {
  const scale = 0.65;

  if (container.value) {
    container.value.style.transform = `scale(${scale})`;
    container.value.style.transformOrigin = 'top left';
  }
};

onMounted(() => {
  window.addEventListener('resize', scalePage);
  scalePage();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', scalePage);
});

</script>

<template>
  <div class="flex-col page container">
    <div class="self-start flex-col" ref="container">
      <span class="self-center text" >子系统-车轮即轮胎</span>
      <div class="flex-row self-stretch group">
        <div class="flex-col">
          <div class="box">
            <img
                class="image"
                src="@/assets/images/box.png"
                style="position: absolute"
             alt=""/>
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
             alt=""/>
            <div class="box_1">
              <div style="margin-top: 10px">
                <el-radio-group v-model="radio1" size="large" syle="width: 100px;height: 100px;">
                  <el-radio-button label="第一梯队" value=1 />
                  <el-radio-button label="第二梯队" value=2 />
                  <el-radio-button label="第三梯队" value=3 />
                </el-radio-group>
                <bar-chart1 class="chart index_3" style="width: 450px;height: 220px;"></bar-chart1>
              </div>
            </div>
          </div>
        </div>
        <div class="box ml-27">
          <img
              class="image_2"
              src= "@/assets/images/box2.png"
           alt=""/>
          <div class="box_3 flex-col">
            <div class=" flex-row">
              <div class="box_2 flex-col">
                <h2>轮胎链路全景图</h2>
                <div class="flex-row self-stretch group">
                  <h3 style="margin-right: 10px">上游</h3>
                  <el-tag type="primary" class='el-tag' style="margin-right: 10px;">合成橡胶<br>30%</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 10px">天然橡胶<br>20%</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 10px">钢丝帘线<br>15%</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 10px">炭黑<br>25%</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 10px">橡胶助剂<br>10%</el-tag>
                </div>
                <div class="flex-row self-stretch group" style="">
                  <h3 style="margin-right: 10px">下游</h3>
                  <el-tag type="primary" class='el-tag' style="margin-right: 10px;">载重汽车</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 10px">乘用车</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 10px">工程机械车</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 10px">工业车辆</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 10px">特种车辆</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 10px">飞机</el-tag>
                </div>
              </div>
              <div style="margin-top: 30px;margin-left: 100px">
                <map-chart style="width: 300px;height: 300px;background: 0,0,0,0"></map-chart>
              </div>
            </div>
            <div class="flex-row" >
              <pie-chart1 style="width: 245px;height: 300px;"></pie-chart1>
              <pie-chart2 style="width: 245px;height: 300px;"></pie-chart2>
              <pie-chart3 style="width: 245px;height: 300px;"></pie-chart3>
            </div>
          </div>
        </div>
        <div class="flex-col items-center group_2">
          <div class="box">
            <img
                class="image"
                src= "@/assets/images/box3.png"
             alt=""/>
            <div class="box_1 flex-col" style="text-align: left;">
              <h3>行业份额</h3>
              <div style="">
                <pie-chart4 style="height: 250px;"></pie-chart4>
              </div>
            </div>
          </div>
          <div class="box mt-23">
            <img
                class="image"
                src="@/assets/images/box.png"
             alt=""/>
            <div class="box_1" style="text-align: left;">
              <h3>竞品对标</h3>
              <div style="">
                <bar-chart2 style="height: 250px;"></bar-chart2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-row self-stretch group_3" >
        <div class="box">
          <img
              class="image_3"
              src="@/assets/images/box.png" alt=""/>
          <div class="box4 flex-col" style="text-align: left;">
            <h3>市场供给</h3>
            <div>
              <bar-chart3 style="height: 250px;"></bar-chart3>
            </div>
          </div>
        </div>
        <div class="box ml-43">
          <img
              class="image"
              src="@/assets/images/box.png"
           alt=""/>
          <div class="box_1 flex-col" style="text-align: left;">
            <div >
              <h2>产业分析</h2>
            </div>
            <div style="text-align: left;">
              <p style="color: white;">
              <span style="color: red;">产业链分析:</span>
                下游汽车行业销量回暖，带动轮胎需求;上游原材料价格震荡上涨，海运费处于高位，胎企成本端承压;半钢胎开工率处于高位，全钢胎开工率有所下降。<br>
                <span style="color: red;">行业驱动分析:</span>
                环保趋严，国内低端轮胎淘汰。据中国轮胎商务网不完全统计，截至24年1月，在过去四年山东轮胎至少淘汰了4432万条产能。我国胎企依靠海外基地提升欧美渗透率。截至23年底，我国胎企在海外已投产半钢胎超1亿条，全钢达2590万条，已规划未投产的半钢产能达9700万条，全钢315万条。<br>
                <span style="color: red;">重点公司分析:</span>
                重点公司分析:胎企再扩海外基地，注重品牌战略。经过30余年发展，中国轮胎整体规模大幅增长，数量已经占据全球75强的半壁江山，但呈现大而不强的局面，主打的仍是性价比优势。为提升自身竞争力，同时一定程度上规避贸易风险，胎企继续布局海外基地，赛轮、玲珑、森麒麟、通用均布局了海外多个基地。同时胎企积极提升品牌价值，一是拓展配套业务，二是打造创新产品，三是发掘新宣传渠道，从赞助体育赛事到与媒体、平台合作，在营销上努力发力。
              </p>
            </div>
          </div>
        </div>
        <div class="box ml-27">
          <img
              class="image"
              src="@/assets/images/box.png"
           alt=""/>
          <div class="box_1" style="text-align: left;">
            <h2>产业资讯</h2>
            <div style="background-color: #0C1439">
              <el-table :data="tableData"
                        :header-cell-style="{ background: '#0C1439', color: '#ffffff' }"
                        :row-style="{ background: '#0C1439' }"
                        style="width: 100%;height:100%;color: #ffffff" >
                <el-table-column prop="date" label="日期" width="120" />
                <el-table-column prop="source" label="来源" width="90" />
                <el-table-column prop="news" label="内容" />
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* 隐藏滚动条 */
  position: relative;
  cursor: grab; /* 鼠标样式 */
}
.container:active {
  cursor: grabbing;
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
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;
}
.text {
  color: #ffffff;
  font-size: 36px;
  line-height: 33px;
}
.group {
  margin-top: 40px;
}
p{
  font-size: 12px;
  color: #ffffff;
}
h2 {
  margin: 10px 0 0 30px;
  color: #ffffff;
}
h3 {
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
.el-tag{
  height: 50px;
  width: 60px;
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
  width: 350px;
  height: 350px;
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
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #2f4b74;
}
</style>
