<script setup lang="ts" >
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
  type EChartsOption = echarts.EChartsOption;
  const chartDom = document.getElementById('pieChart1');
  const myChart = echarts.init(chartDom, 'dark');
  var option: EChartsOption;
  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'center',
      right: 'right'
    },
    backgroundColor: 'transparent',
    series: [
      {
        name: 'Access From',
        type: 'pie',
        right: '30%',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 3,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 934, name: '民营企业' },
          { value: 52, name: '外资企业' },
          { value: 14, name: '国企企业' },
          { value: 13, name: '合资企业' }
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
       ref="pieChart1"
       id="pieChart1"
       >
  </div>
</template>

<style scoped>
.transparent-bg {
  background-color: rgba(0, 0, 0, 0); /* 黑色，50%透明 */
}
</style>
