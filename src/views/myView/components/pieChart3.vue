<script setup lang="ts" >
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
  type EChartsOption = echarts.EChartsOption;
  const chartDom = document.getElementById('pieChart3');
  const myChart = echarts.init(chartDom, 'dark');
  var option: EChartsOption;
  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'center',
      right: 'right',
      itemWidth: 15,
      itemHeight: 10
    },
    backgroundColor: 'transparent',
    series: [
      {
        name: 'Access From',
        type: 'pie',
        left: '-45%',
        radius: ['50%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 2,
          borderColor: '#fff',
          borderWidth: 1
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 10,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 105, name: '<1年' },
          { value: 512, name: '1~5年' },
          { value: 245, name: '>15年' },
          { value: 221, name: '5~10年' }
        ]
      }
    ]
  };
  // 设置实例参数
  option && myChart.setOption(option);
});

</script>

<template>
  <div class="transparent-bg"
       ref="pieChart3"
       id="pieChart3"
  >
  </div>
</template>

<style scoped>
.transparent-bg {
  background-color: rgba(0, 0, 0, 0); /* 黑色，50%透明 */
}
</style>
