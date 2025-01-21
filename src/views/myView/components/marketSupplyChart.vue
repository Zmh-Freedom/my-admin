<script setup lang="ts">
import { marketSupplyService } from '@/api/subsystem';
import * as echarts from 'echarts';
import { onMounted } from 'vue';
const params = defineProps(['belongSubsystem']);
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
    data: ['市场需要', '产能'],
    left: 'center',
    itemWidth: 15,
    itemHeight: 10
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
  yAxis: [
    {
      type: 'value',
      name: '市场需要',
      splitLine: {
        show: false // 不显示网格线
      },
      axisLabel: {
        formatter: '{value}'
      },
      show: false
    },
    {
      type: 'value',
      name: '产能',
      splitLine: {
        show: false // 不显示网格线
      },
      axisLabel: {
        formatter: '{value}%'
      },
      show: false
    }
  ],
  series: [
    {
      name: '市场需要',
      type: 'bar',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value as number + ' ';
        }
      },
      data: []
    },
    {
      name: '产能',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value as number + ' ';
        }
      },
      data: []
    }
  ]
};
async function setData() {
  // 异步获取数据
  const result = await marketSupplyService(params.belongSubsystem);
  if (result['code'] === 0) {
    var items = result.data.item;
    var dates: string[] = [];
    var capacity: number[] = [];
    var demand: number[] = [];
    for (var i in items) {
      dates.push(items[i].date);
      capacity.push(items[i].capacity);
      demand.push(items[i].demand);
    }
    // 设置数据
    myChart.setOption({
      xAxis: {
        data: dates
      },
      series: [
        {
          name: '市场需要',
          data: demand,
          tooltip: {
            valueFormatter: function (value) {
              return value as number + ' ';
            }
          }
        },
        {
          name: '产能',
          data: capacity
        }
      ]
    });
  }
}
onMounted(() => {
  var chartDom = document.getElementById('barChart3');
  myChart = echarts.init(chartDom, 'dark');
  // 设置实例参数
  myChart.setOption(option);
  setData();
});
</script>

<template>
  <div ref="barChart3"
       id="barChart3">

  </div>
</template>

<style scoped>

</style>
