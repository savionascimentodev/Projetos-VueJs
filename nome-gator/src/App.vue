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
                    {{ prefix }}
                  </li>
                </ul>
                <br />
                <input
                  type="text"
                  placeholder="Digite o prefixo"
                  class="form-control"
                />
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
                    {{ sufix }}
                  </li>
                </ul>
                <br />
                <input
                  type="text"
                  placeholder="Digite o sufixo"
                  class="form-control"
                />
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
