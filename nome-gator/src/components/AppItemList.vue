<template>
  <div>
    <h5>
      {{ title }}
      <span class="badge badge-info">{{ items.length }}</span>
    </h5>
    <div class="card">
      <div class="card-body">
        <ul class="list-group">
          <li v-for="item in items" :key="item" class="list-group-item">
            <div class="row">
              <div class="col-md">
                {{ item }}
              </div>
              <div class="col-md text-end">
                <button class="btn btn-danger" @click="deleteItem(item)">
                  <span class="fa fa-trash"></span>
                </button>
              </div>
            </div>
          </li>
        </ul>
        <br />
        <div class="input-group">
          <input
            v-model="item"
            @keyup.enter="addItem(item)"
            type="text"
            placeholder="Digite o item"
            class="form-control"
          />
          <div class="input-group-append">
            <button class="btn btn-success" @click="addItem(item)">
              <span class="fa fa-plus"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppItemList',
  props: ['title', 'items'],
  data() {
    return {
      item: ''
    }
  },
  methods: {
    addItem(item) {
      this.$emit('addItem', item)
      this.item = ''
    },
    deleteItem(item) {
      this.$emit('deleteItem', item)
    }
  }
}
</script>

<style scoped></style>
