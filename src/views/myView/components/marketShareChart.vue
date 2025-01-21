<script setup lang="ts" >
import { marketShareService } from '@/api/subsystem';
import * as echarts from 'echarts';
import { onMounted } from 'vue';
type EChartsOption = echarts.EChartsOption;
var option: EChartsOption;
var myChart;
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
const params = defineProps(['belongSubsystem']);
async function setData() {
  // 异步获取数据
  const result = await marketShareService(params.belongSubsystem);
  if (result['code'] === 0) {
    var items = result.data.item;
    var seriesData: { value:number, name:string }[] = [];
    for (var i in items) {
      var temp = {
        value: items[i].share,
        name: items[i].companyName
      };
      seriesData.push(temp);
    }
    console.log(seriesData);
    // 设置数据
    myChart.setOption({
      series: [{
        data: seriesData
      }]
    });
  }
}
onMounted(() => {
  const chartDom = document.getElementById('pieChart4');
  myChart = echarts.init(chartDom, 'dark');
  // 设置实例参数
  option && myChart.setOption(option);
  setData();
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
