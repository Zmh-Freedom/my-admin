<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import China from '@/assets/China.json';

// 获取地图DOM元素
const map = ref();

// 注册中国地图
echarts.registerMap('china', China as never);
onMounted(() => {
  const myMap = echarts.init(map.value);
  // 设置配置项
  myMap.setOption({
    backgroundColor: 'transparent',
    geo: {
      map: 'china',
      roam: false, // 鼠标缩放
      // 地图位置
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      // 地图文字设置
      label: {
        show: true,
        color: 'white',
        fontSize: 8
      },
      itemStyle: {
        color:
        // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
            {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              // 渐变效果
              colorStops: [
                {
                  offset: 0,
                  color: ' #022960 ' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#023481' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            },
        // 边框设置样式
        borderColor: '#179FCB',
        shadowColor: 'rgba(23,159,203, 0.5)',
        shadowBlur: 17
      },
      //   地图高亮效果
      emphasis: {
        itemStyle: {
          color: '#1369CD'
        },
        label: {
          color: '#82B9F8'
        }
      }
    }
  });
});
</script>

<template>
  <div class="transparent-bg"
       ref="map">
  </div>
</template>

<style scoped lang="scss">
.transparent-bg {
  background-color: rgba(0, 0, 0, 1); /* 黑色，50%透明 */
}
</style>
