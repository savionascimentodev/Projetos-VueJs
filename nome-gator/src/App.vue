<template>
  <div id="slogan">
    <div class="text-center mt-3 mb-3">
      <h1>NameGator</h1>
      <br />
      <h6 class="text-secondary">
        Gerador de nomes utilizando VueJs, GraphQL e Node
      </h6>
    </div>
    <div id="main">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <h5>
              Prefixos
              <span class="badge badge-info">{{ prefixes.length }}</span>
            </h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li
                    v-for="prefix in prefixes"
                    :key="prefix"
                    class="list-group-item"
                  >
                    <div class="row">
                      <div class="col-md">
                        {{ prefix }}
                      </div>
                      <div class="col-md text-end">
                        <button
                          class="btn btn-danger"
                          @click="deletePrefix(prefix)"
                        >
                          <span class="fa fa-trash"></span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
                <br />
                <div class="input-group">
                  <input
                    v-model="prefix"
                    @keyup.enter="addPrefix(prefix)"
                    type="text"
                    placeholder="Digite o prefixo"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-success" @click="addPrefix(prefix)">
                      <span class="fa fa-plus"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md">
            <h5>
              Sufixos<span class="badge badge-info">{{ sufixes.length }}</span>
            </h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li
                    v-for="sufix in sufixes"
                    :key="sufix"
                    class="list-group-item"
                  >
                    <div class="row">
                      <div class="col-md">
                        {{ sufix }}
                      </div>
                      <div class="col-md text-end">
                        <button
                          class="btn btn-danger"
                          @click="deleteSufix(sufix)"
                        >
                          <span class="fa fa-trash"></span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
                <br />
                <div class="input-group">
                  <input
                    v-model="sufix"
                    @keyup.enter="addSufix(sufix)"
                    type="text"
                    placeholder="Digite o sufixo"
                    class="form-control"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-success" @click="addSufix(sufix)">
                      <span class="fa fa-plus"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
                {{ domain }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

export default {
  name: 'App',
  data() {
    return {
      prefix: '',
      sufix: '',
      prefixes: ['Air', 'Jet', 'Fly'],
      sufixes: ['Hub', 'Station', 'Mart'],
      domains: [
        'AirHub',
        'AirStation',
        'AirMart',
        'JetHub',
        'JetStation',
        'JetMart',
        'FlyHub',
        'FlyStation',
        'FlyMart'
      ]
    }
  },
  methods: {
    addPrefix(prefix) {
      this.prefixes.push(prefix)
      this.prefix = ''
      this.generate()
    },
    addSufix(sufix) {
      this.sufixes.push(sufix)
      this.sufix = ''
      this.generate()
    },
    generate() {
      this.domains = []
      for (const prefix of this.prefixes) {
        for (const sufix of this.sufixes) {
          this.domains.push(prefix + sufix)
        }
      }
    },
    deletePrefix(prefix) {
      this.prefixes.splice(this.prefixes.indexOf(prefix), 1)
      this.generate()
    },
    deleteSufix(sufix) {
      this.sufixes.splice(this.sufixes.indexOf(sufix), 1)
      this.generate()
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
