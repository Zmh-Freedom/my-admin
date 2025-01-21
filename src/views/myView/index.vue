<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import '@/assets/index.css';
import MarketSize from '@/views/myView/components/marketSizeChart.vue';
import MapChart from '@/views/myView/components/mapChart.vue';
import PieChart1 from '@/views/myView/components/pieChart1.vue';
import PieChart2 from '@/views/myView/components/pieChart2.vue';
import PieChart3 from '@/views/myView/components/pieChart3.vue';
import ShareChart from '@/views/myView/components/marketShareChart.vue';
import echelonChart from '@/views/myView/components/marketEchelon.vue';
import CompetitiveChart from '@/views/myView/components/competitiveChart.vue';
import SupplyChart from '@/views/myView/components/marketSupplyChart.vue';
const belongSubsystem = 54;
const radio1 = ref('第一梯队');
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

watch(radio1, (value) => {
  console.log(value);
});

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
             alt=""/>
            <div class="box_1">
              <h2>
                行业市场规模
              </h2>
              <MarketSize  :belongSubsystem="belongSubsystem" class="chart chart_1"></MarketSize>
            </div>
          </div>
          <div class="box mt-23">
            <img
                class="image"
                src="@/assets/images/box.png"
                style="position: absolute"
             alt=""/>
            <div class="box_1">
              <div style="margin-top: 1vh">
                <el-radio-group v-model="radio1" size="small" >
                  <el-radio-button label="第一梯队" value="第一梯队" />
                  <el-radio-button label="第二梯队" value="第二梯队" />
                  <el-radio-button label="第三梯队" value="第三梯队" />
                </el-radio-group>
                <echelonChart :echelon="radio1" :belongSubsystem="belongSubsystem"  class="chart_1"></echelonChart>
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
              <div class="flex-col" style="text-align: center;">
                <h2>轮胎链路全景图</h2>
                <div class="flex-row self-stretch group">
                  <h3 style="margin-right: 2vh">上游</h3>
                  <div class="flex-col">
                    <div class="flex-row">
                      <el-tag type="primary"   style="margin-right: 1vh;">合成橡胶<br>30%</el-tag>
                      <el-tag type="primary"   style="margin-right: 1vh">天然橡胶<br>20%</el-tag>
                      <el-tag type="primary"   style="margin-right: 1vh">钢丝帘线<br>15%</el-tag>
                      <el-tag type="primary"   style="margin-right: 1vh">炭黑<br>25%</el-tag>
                    </div>
                    <div class="flex-row" style="margin-top: 1vh">
                      <el-tag type="primary"   style="margin-right: 1vh">橡胶助剂<br>10%</el-tag>
                    </div>
                  </div>
                </div>
                <div class="flex-row self-stretch group" style="margin-top: 10vh">
                  <h3 style="margin-right: 10px">下游</h3>
                  <el-tag type="primary" class='el-tag' style="margin-right: 0.5vw;">载重汽车</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 0.5vw">乘用车</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 0.5vw">工程机<br>械车</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 0.5vw">工业车辆</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 0.5vw">特种车辆</el-tag>
                  <el-tag type="primary" class='el-tag' style="margin-right: 0.5vw">飞机</el-tag>
                </div>
              </div>
              <div style="margin-top: 5vh;margin-left: -7vw">
                <map-chart class="chart_map"></map-chart>
              </div>
            </div>
            <div class="flex-row" >
              <pie-chart1 class="chart_pie"></pie-chart1>
              <pie-chart2 class="chart_pie"></pie-chart2>
              <pie-chart3 class="chart_pie"></pie-chart3>
            </div>
          </div>
        </div>
        <div class="flex-col items-center ml-27">
          <div class="box">
            <img
                class="image"
                src= "@/assets/images/box3.png"
             alt=""/>
            <div class="box_1 flex-col" style="text-align: left;">
              <h2>行业份额</h2>
              <div style="">
                <ShareChart :belongSubsystem="belongSubsystem" class="chart_pie2"></ShareChart>
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
                <CompetitiveChart :belongSubsystem="belongSubsystem" class="chart_1" style="font-size: 0.5%"></CompetitiveChart>
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
            <h2>市场供给</h2>
            <div>
              <SupplyChart :belongSubsystem="belongSubsystem" class="chart_2 chart"></SupplyChart>
            </div>
          </div>
        </div>
        <div class="box ml-27">
          <img
              class="image"
              src="@/assets/images/box.png"
           alt=""/>
          <div class="box_1 flex-col" style="text-align: left;">
            <div >
              <h2>产业分析</h2>
            </div>
            <div style="text-align: left;padding-left: 0.5vw;padding-right: 0.5vw">
              <p style="color: white;font-size: 8px">
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
                        size="small"
                        style="width: 25vw;height:25vh;color: #ffffff;font-size: 1.5vh;" >
                <el-table-column prop="date" label="日期" width="80" />
                <el-table-column prop="source" label="来源" width="50" />
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
  margin-top: 1vh;
}
.ml-27{
  margin-left: 0.5vw;
}
.ml-43 {
  margin-left: 0.5vw;
}
.index_3{
  z-index: 3;
}
.page {
  padding: 3px 3px 5px;
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
  margin-top: 3.7vh;
}
p{
  font-size: 2vh;
  color: #ffffff;
}
h2 {
  font-size: 3vh;
  margin: 1vh 0 0 3vh;
  color: #ffffff;
}
h3 {
  font-size: 2vh;
  margin: 1vh 0 0 3vh;
  color: #ffffff;
}
.image {
  position: absolute;
  width: 24.4vw;
  height: 31vh;
  user-select: none;        /* 禁止选中 */
  pointer-events: none;     /* 禁用鼠标事件 */
  -webkit-user-drag: none;  /* 禁止拖动（Safari） */
}
.el-tag{
  font-size: 2vh;
  height: 4.6vh;
  width: 4vw;
}
.chart{
  z-index: 10;
}
.chart_1{
  width: 23.43vw;
  height: 25vh;
}
.chart_2{
  width: 40.43vw;
  height: 26vh;
}
.chart_map{
  width: 18.625vw;
  height: 38vh;
  background: 0,0,0,0;
}
.chart_pie{
  width: 14.5vw;
  height: 20vh;
}
.chart_pie2{
  width: 25vw;
  height: 25vh;
}
.box{
  background-color: #0C1439;
  position: relative;
}
.box_1{
  text-align: center;
  width: 24.4vw;
  height: 30.85vh;
  padding: 1px;
}
.box_2{
  text-align: center;
  width: 18.22vw;
  height: 32.4vh;
  padding: 1px;
}
.box_3{
  width: 43.4vw;
  height: 56.57vh;
}
.box4{
  width: 43.6vw;
  height: 31vh;
}
.image_2 {
  width: 43.4vw;
  height: 63vh;
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
  margin-top: 1vh;
}
.image_3 {
  width: 43.64vw;
  height: 31vh;
  position: absolute;
  z-index: 10
}
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #2f4b74;
}
</style>
