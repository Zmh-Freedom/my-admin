<script setup lang="ts">
import { marketSizeService } from '@/api/subsystem';
import * as echarts from 'echarts';
import { onMounted } from 'vue';
type EChartsOption = echarts.EChartsOption;
var myChart;
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
    data: ['产值', '增长率'],
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
      data: [],
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
      },
      show: false
    },
    {
      type: 'value',
      name: '增长率',
      splitLine: {
        show: false // 不显示网格线
      },
      axisLabel: {
        formatter: '{value}',
        fontSize: '10px'
      },
      show: false
    }
  ],
  series: [
    {
      name: '产值',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value as number + ' ';
        }
      },
      data: []
    },
    {
      name: '增长率',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value as number + '%';
        }
      },
      data: []
    }
  ]
};
const params = defineProps(['belongSubsystem']);
async function setData() {
  var result = await marketSizeService(params.belongSubsystem);
  if (result['code'] === 0) {
    var items = result.data.item;
    var sizes: string[] = [];
    var years: string[] = [];
    var increaseRates: number[] = [];
    for (var i in items) {
      sizes.push(items[i].size);
      years.push(items[i].year);
      increaseRates.push(items[i].increaseRate * 100);
    }
    console.log(increaseRates);
    myChart.setOption({
      xAxis: {
        data: years
      },
      series: [
        {
          'name': '产值',
          data: sizes
        },
        {
          'name': '增长率',
          data: increaseRates
        }
      ]
    });
  }
}

onMounted(() => {
  var chartDom = document.getElementById('myChart');
  myChart = echarts.init(chartDom, 'dark');
  setData();
  // 设置实例参数
  option && myChart.setOption(option);
});
</script>

<template>
  <div ref="myChart"
       id="myChart">

  </div>
</template>

<style scoped>

</style>
