<template>
  <table class="table">
    <thead>
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Máximo</th>
        <th>Mínimo</th>
        <th>Variação</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(coin, index) in coins" :key="index">
        <td>{{ coin.code }}</td>
        <td>{{ coin.name }}</td>
        <td>{{ coin.high }}</td>
        <td>{{ coin.low }}</td>
        <td>
          <span
            class="label label-rounded text-small"
            :class="{
              'label-error': coin.pctChange < 0,
              'label-success': coin.pctChange > 0,
              'label-warning': coin.pctChange == 0
            }"
          >
            {{ coin.pctChange }} %
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableCoins',
  props: { coins: { type: Object, required: true } }
}
</script>
<style>
table tr:hover {
  background: #ccc !important;
  color: #666;
}
</style>
