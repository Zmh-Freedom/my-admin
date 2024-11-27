<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
  type EChartsOption = echarts.EChartsOption;
  var chartDom = document.getElementById('myChart2');
  var myChart = echarts.init(chartDom, 'dark');
  var option: EChartsOption;
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    backgroundColor: 'transparent',
    legend: {
      data: ['轮胎产值', '增长率'],
      orient: 'vertical',
      bottom: 'bottom',
      itemWidth: 15,
      itemHeight: 10
    },
    grid: {
      top: '4%',
      left: '3%',
      right: '4%',
      bottom: '14%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['2020', '2021', '2022', '2023'],
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          formatter: '{value}',
          fontSize: '10px'
        }
      }

    ],
    splitLine: {
      show: false // 不显示网格线
    },
    yAxis: [
      {
        type: 'value',
        name: '轮胎产值',
        min: 0,
        max: 2000,
        interval: 250,
        splitLine: {
          show: false // 不显示网格线
        },
        axisLabel: {
          formatter: '{value}',
          fontSize: '10px'
        }
      },
      {
        type: 'value',
        name: '增长率',
        min: 0,
        max: 200,
        interval: 20,
        splitLine: {
          show: false // 不显示网格线
        },
        axisLabel: {
          formatter: '{value}',
          fontSize: '10px'
        }
      }
    ],
    series: [
      {
        name: '轮胎产值',
        type: 'bar',
        barWidth: '40%',
        barGap: '20%',
        barCategoryGap: '10%',
        tooltip: {
          valueFormatter: function (value) {
            return value as number + ' ';
          }
        },
        data: [1459, 1752, 1744.5, 1805]
      },
      {
        name: '增长率',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value as number + ' ';
          }
        },
        data: [80, 85, 80, 160]
      }
    ]
  };
  // 设置实例参数
  option && myChart.setOption(option);
});
</script>

<template>
  <div ref="myChart2"
       id="myChart2">

  </div>
</template>

<style scoped>

</style>
