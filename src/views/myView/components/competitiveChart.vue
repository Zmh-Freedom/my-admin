<script setup lang="ts">
import { competitiveService } from '@/api/subsystem';
import * as echarts from 'echarts';
import { onMounted } from 'vue';
const params = defineProps(['belongSubsystem']);
type EChartsOption = echarts.EChartsOption;
var option: EChartsOption;
var myChart;
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {
    itemWidth: 16,
    itemHeight: 14,
    type: 'scroll'
  },
  // backgroundColor: 'transparent',
  grid: {
    top: '15%',
    left: '3%',
    right: '4%',
    bottom: '1%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    splitLine: {
      show: false // 不显示网格线
    },
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
    nameTextStyle: {
      fontSize: 1
    },
    axisLabel: {
      formatter: '{value}',
      fontSize: '9px'
    },
    data: []
  },
  series: [
  ]
};
interface serious {
  name: string,
  type: 'bar',
  stack: 'total',
  label:{ show:false },
  emphasis: { focus:'series' },
  data: Array<number>
}
async function setData() {
  // 异步获取数据
  const result = await competitiveService(params.belongSubsystem);
  if (result['code'] === 0) {
    var items = result.data.item;
    var brandList = result.data.brandList;
    var companyList = result.data.companyList;
    var seriousData: serious[] = [];
    for (var i in companyList) {
      var temp: serious = {
        name: companyList[i],
        type: 'bar',
        stack: 'total',
        label: { show: false },
        emphasis: { focus: 'series' },
        data: new Array(brandList.length).fill(0)
      };
      seriousData.push(temp);
    }
    for (i in items) {
      var name = items[i].companyName;
      var brand = items[i].brand;
      var value = items[i].proportion;
      // const index1 = seriousData.findIndex(item => item.name === name);
      const index1 = companyList.indexOf(name);
      const index2 = brandList.indexOf(brand);
      seriousData[index1].data[index2] = value;
    }
    console.log(seriousData);
    // 设置数据
    myChart.setOption({
      yAxis: {
        data: brandList
      },
      series: seriousData
    });
  }
}
onMounted(() => {
  var chartDom = document.getElementById('barChart2');
  myChart = echarts.init(chartDom, 'dark');
  option && myChart.setOption(option);
  setData();
});
</script>

<template>
  <div ref="barChart2"
       id="barChart2">
  </div>
</template>
<style scoped>

</style>
