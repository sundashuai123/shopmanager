<template>
  <el-card class="box">
    <cus-bread level1="数据统计" level2="数据报表"></cus-bread>
    <div id="main" style="width: 1000px;height:600px; margin-top:50px;"></div>
  </el-card>
</template>

<script>
import echarts from "echarts";
// console.log(echarts);

export default {
  // Echartsinit操作的dom
  // mounted中才有dom

  mounted() {
    this.initEcharts();
  },

  methods: {
    async initEcharts() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据

      // reports/:type
      // 1. reports/1
      // 2. reports/type=1
      // 3. reports/type/1

      const res = await this.$http.get(`reports/type/1`);

      // console.log(option2);
      const option2 = res.data.data;

      const option1 = {
        title: {
          text: "数据报表"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },

        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        }
      };

      const option = { ...option1, ...option2 };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style>
.box {
  height: 100%;
}
</style>
