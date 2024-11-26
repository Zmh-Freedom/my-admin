<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
  type EChartsOption = echarts.EChartsOption;
  var chartDom = document.getElementById('barChart2');
  var myChart = echarts.init(chartDom, 'dark');
  var option: EChartsOption;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {},
    backgroundColor: 'transparent',
    grid: {
      top: '10%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      splitLine: {
        show: false // 不显示网格线
      }
    },
    yAxis: {
      type: 'category',
      splitLine: {
        show: false // 不显示网格线
      },
      data: ['比亚迪', '长城', '长安', '宝马', '奔驰', '奥迪']
    },
    series: [
      {
        name: '米其林',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [10, 20, 30, 40, 50, 60]
      },
      {
        name: '普利司通',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [20, 32, 10, 34, 90, 30, 10]
      },
      {
        name: '固特异',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [20, 82, 91, 34, 90, 30, 10]
      },
      {
        name: '马牌',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [50, 12, 60, 54, 90, 30, 10]
      },
      {
        name: '韩泰',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [20, 32, 12, 34, 90, 30, 20]
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
