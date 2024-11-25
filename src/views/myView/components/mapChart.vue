<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
import getChinaMap from '@/api/getChinaMap';
onMounted(() => {
  const chartDom = document.getElementById('chartsDOM');
  // 初始化统计图对象
  const myChart = echarts.init(chartDom);
  // 显示 loading 动画
  myChart.showLoading();
  // 再得到数据的基础上，进行地图绘制
  getChinaMap.then(res => {
    // 得到结果后，关闭动画
    myChart.hideLoading();
    // 注册地图(数据放在axios返回对象的data中哦)
    echarts.registerMap('CN', res.data);
    const option = {
      series: [
        {
          name: '中国地图',
          type: 'map',
          map: 'CN', // 这个是上面注册时的名字哦，registerMap（'这个名字保持一致'）
          label: {
            show: true
          }
        }
      ],
      backgroundColor: '#0C1439'
    };
    myChart.setOption(option);
  });
});
</script>

<template>
  <div class="transparent-bg"
       ref="chartsDOM"
       id="myChart"
       style="width:800px;height:600px">
  </div>
</template>

<style scoped lang="scss">
.transparent-bg {
  background-color: rgba(0, 0, 0, 1); /* 黑色，50%透明 */
}
</style>
