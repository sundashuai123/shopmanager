<template>
  <el-card class="box">
    <cus-bread level1="权限管理" level2="权限列表"></cus-bread>
  </el-card>
</template>

<script>
export default {
  created () {
    this.getTableData()
  },
  methods: {
    async getTableData () {
      const res = await this.$http.get(`rights/list`)
      console.log(res)
      const {
        data,
        meta: { status }
      } = res.data
      if (status === 200) {
        this.list = data
      }
    }
  }
}
</script>

<style>
</style>
