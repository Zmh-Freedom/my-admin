<script setup lang="ts">
import { marketEchelonService } from '@/api/subsystem';
import * as echarts from 'echarts';
import { onMounted, watch } from 'vue';
const params = defineProps(['echelon', 'belongSubsystem']);
var myChart;
type EChartsOption = echarts.EChartsOption;
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
    bottom: 'bottom',
    itemWidth: 10,
    itemHeight: 8
  },
  backgroundColor: 'transparent',
  grid: {
    top: '4%',
    left: '3%',
    right: '4%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    splitLine: {
      show: false // 不显示网格线
    },
    boundaryGap: [0, 0.01],
    axisLabel: {
      formatter: '{value}',
      fontSize: '10px'
    }
  },
  yAxis: {
    type: 'category',
    splitLine: {
      show: false // 不显示网格线
    },
    data: ['米其林', '普利司通', '固特异'],
    axisLabel: {
      formatter: '{value}',
      fontSize: '10px'
    }
  },
  series: [
    {
      name: '产值（亿元）',
      type: 'bar',
      data: [1068.56, 1060.57, 652.7]
    }
  ]
};

async function setData() {
  // 异步获取数据
  const result = await marketEchelonService(params.belongSubsystem, params.echelon);
  if (result['code'] === 0) {
    var items = result.data.item;
    var names: string[] = [];
    var outputValues: number[] = [];
    for (var i in items) {
      names.push(items[i].companyName);
      outputValues.push(items[i].outputValue);
    }
    // 设置数据
    myChart.setOption({
      yAxis: {
        data: names
      },
      series: [{
        data: outputValues
      }]
    });
  }
}
onMounted(() => {
  var chartDom = document.getElementById('barChart1');
  myChart = echarts.init(chartDom, 'dark');
  option && myChart.setOption(option);
  setData();
});
// 监视params值，来设置对应数据
watch(params, () => {
  setData();
});
</script>

<template>
  <div ref="barChart1"
       id="barChart1">
  </div>
</template>
<style scoped>

</style>
