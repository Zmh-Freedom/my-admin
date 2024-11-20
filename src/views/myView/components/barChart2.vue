<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
  type EChartsOption = echarts.EChartsOption;
  var chartDom = document.getElementById('barChart2');
  var myChart = echarts.init(chartDom, 'dark');
  var option: EChartsOption;

  option = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      bottom: 'bottom'
    },
    grid: {
      top: '4%',
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['米其林', '普利司通', '固特异']
    },
    series: [
      {
        name: '产值（亿元）',
        type: 'bar',
        data: [1068.56, 1060.57, 652.7]
      }
    ]
  };
  option && myChart.setOption(option);
});
</script>

<template>
  <div ref="barChart2"
       id="barChart2">
  </div>
</template>
<style scoped>

</style>
