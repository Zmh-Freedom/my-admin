<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
  type EChartsOption = echarts.EChartsOption;
  var chartDom = document.getElementById('barChart3');
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

    toolbox: {
      feature: {
        // dataView: { show: true, readOnly: false },
        // magicType: { show: true, type: ['line', 'bar'] },
        // restore: { show: true },
        // saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['市场预期', '产值'],
      orient: 'vertical',
      bottom: 'bottom'
    },
    grid: {
      top: '4%',
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['2020', '2021', '2022', '2023', '2024'],
        axisTick: {
          show: false // 不显示坐标轴刻度线
        },
        axisLine: {
          show: false // 不显示坐标轴线
        },
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          formatter: '{value}',
          fontSize: '10px'
        }
      }

    ],
    yAxis: [
      {
        type: 'value',
        name: '市场预期',
        min: 0,
        max: 50,
        interval: 10,
        splitLine: {
          show: false // 不显示网格线
        },
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: '产值',
        min: 0,
        max: 50,
        interval: 10,
        splitLine: {
          show: false // 不显示网格线
        },
        axisLabel: {
          formatter: '{value}%'
        }
      }
    ],
    series: [
      {
        name: '市场预期',
        type: 'bar',
        barWidth: '40%',
        barGap: '20%',
        barCategoryGap: '10%',
        tooltip: {
          valueFormatter: function (value) {
            return value as number + ' ';
          }
        },
        data: [10, 20, 30, 40, 50]
      },
      {
        name: '产值',
        type: 'bar',
        barWidth: '40%',
        barGap: '20%',
        barCategoryGap: '10%',
        tooltip: {
          valueFormatter: function (value) {
            return value as number + ' ';
          }
        },
        data: [20, 25, 50, 45, 30]
      }
    ]
  };
  // 设置实例参数
  option && myChart.setOption(option);
});
</script>

<template>
  <div ref="barChart3"
       id="barChart3">

  </div>
</template>

<style scoped>

</style>
