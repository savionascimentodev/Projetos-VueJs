<template>
  <div class="container">
    <div class="container-header text-center">
      <h4>Api Coin</h4>
    </div>
    <div class="container-body">
      <TableCoins :coins="coins" />
    </div>
  </div>
</template>

<script>
import Api from '@/server/api'
import TableCoins from '@/components/TableCoins.vue'

export default {
  name: 'App',
  components: {
    TableCoins
  },
  data() {
    return {
      coins: [],
      isLoading: false,
      cor: '#808080'
    }
  },
  created() {
    this.chamarApi()
  },
  methods: {
    async chamarApi() {
      const response = await Api.all()
      this.coins = response.data
      this.isLoading = true
    }
  }
}
</script>
<style>
html {
  background: linear-gradient(to right, #434343 0%, black 100%) !important;
}

.container {
  font-family: monospace;
  color: #fff;
  background: linear-gradient(to right, #434343 0%, black 100%) !important;
}

.container-header {
  padding-top: 2rem;
}

.container-body {
  overflow: hidden;
  padding: 0rem 12rem 2rem 12rem;
}
</style>
