<template>
  <button class="button"
  @click="$emit('onClick', label)"
  :class="{ double, triple, operation }"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {},
    operation: { type: Boolean },
    double: { type: Boolean },
    triple: { type: Boolean },
  }
}
</script>

<style>
:root {
  --button: #fff;
  --border-button: solid 1px rgb(179, 179, 179);
}

.button {
  font-size: 1.4em;
  background-color: var(--button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none;
}

.button:active {
  background-color: #ccc;
}

.button.double {
  grid-column: span 2;
}

.button.triple {
  grid-column: span 3;
}

.button.operation {
  background-color: #708095;
  color: #fff;
}

.button.operation:active {
  background-color: #5d6b7ccc;
}
</style>