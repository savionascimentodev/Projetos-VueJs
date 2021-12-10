<template>
  <section>
    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <AppItemList
              title="Prefixos"
              v-on:addItem="addPrefix"
              v-on:deleteItem="deletePrefix"
              :items="prefixes"
            />
          </div>
          <div class="col-md">
            <AppItemList
              title="Sufixos"
              v-on:addItem="addSufix"
              v-on:deleteItem="deleteSufix"
              :items="sufixes"
            />
          </div>
        </div>
        <br />
        <h5>
          Dominios <span class="badge badge-info">{{ domains.length }}</span>
        </h5>
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              <li
                v-for="domain in domains"
                :key="domain.name"
                class="list-group-item"
              >
                <div class="row">
                  <div class="col-md">
                    {{ domain.name }}
                  </div>
                  <div class="col-md text-end">
                    <a
                      :href="domain.checkout"
                      class="btn btn-warning"
                      target="_blanck"
                    >
                      <span class="fa fa-shopping-cart"></span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import AppItemList from './AppItemList.vue'

export default {
  name: 'App',
  components: { AppItemList },
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

<style></style>
