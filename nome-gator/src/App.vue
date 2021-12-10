<template>
  <section>
    <div class="text-center mt-3 mb-3">
      <h1>NameGator</h1>
      <br />
      <h6 class="text-secondary">
        Gerador de nomes utilizando VueJs, GraphQL e Node
      </h6>
    </div>
    <div id="main">
      <DomainList />
    </div>
  </section>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import DomainList from './components/DomainList.vue'

export default {
  name: 'App',
  components: { DomainList },
  data() {
    return {
      prefixes: ['Air', 'Jet', 'Fly'],
      sufixes: ['Hub', 'Station', 'Mart']
    }
  },
  computed: {
    domains() {
      const domains = []
      for (const prefix of this.prefixes) {
        for (const sufix of this.sufixes) {
          const name = prefix + sufix
          const url = name.toLowerCase()
          const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${url}&tld=.com`
          domains.push({
            name,
            checkout
          })
        }
      }
      return domains
    }
  },
  methods: {
    addPrefix(prefix) {
      this.prefixes.push(prefix)
    },
    addSufix(sufix) {
      this.sufixes.push(sufix)
    },
    deletePrefix(prefix) {
      this.prefixes.splice(this.prefixes.indexOf(prefix), 1)
    },
    deleteSufix(sufix) {
      this.sufixes.splice(this.sufixes.indexOf(sufix), 1)
    }
  }
}
</script>

<style>
#main {
  background-color: #f1f1f1;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
