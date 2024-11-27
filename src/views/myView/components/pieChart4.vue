<script setup lang="ts" >
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(() => {
  type EChartsOption = echarts.EChartsOption;
  const chartDom = document.getElementById('pieChart4');
  const myChart = echarts.init(chartDom, 'dark');
  var option: EChartsOption;
  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'center',
      orient: 'vertical',
      right: '10%',
      itemWidth: 10,
      itemHeight: 10
    },
    backgroundColor: 'transparent',
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['60%', '90%'],
        left: '-50%',
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
          { value: 16, name: '米其林' },
          { value: 15, name: '普利司通' },
          { value: 10, name: '固特异' },
          { value: 7, name: '马牌' },
          { value: 4, name: '住友橡胶' },
          { value: 4, name: '倍耐力' },
          { value: 4, name: '韩泰' },
          { value: 3, name: '优客豪马' },
          { value: 37, name: '其他' }
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
       ref="pieChart4"
       id="pieChart4"
  >
  </div>
</template>

<style scoped>
.transparent-bg {
  background-color: rgba(0, 0, 0, 0); /* 黑色，50%透明 */
}
</style>
