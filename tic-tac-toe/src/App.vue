<script setup>
import { ref, computed } from 'vue'

const player = ref('X')
const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])

const calculateWinner = board => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }

  return null
}

const winner = computed(() => calculateWinner(board.value.flat()))

const makeMove = (x, y) => {
  if (winner.value) return

  if (board.value[x][y]) return

  board.value[x][y] = player.value

  player.value = player.value === 'X' ? '0' : 'X'
}

const resetGame = () => {
  board.value = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  player.value = 'X'
}
</script>

<template>
  <main class="pt-8 text-center">
    <h1 class="mb-8 text-3xl font-bold uppercase">Tic Tac Toe</h1>

    <h3 class="text-xl mb-4 flex justify-center">
      Turno do jogador:
      <span
        :class="` ${player === 'X' ? 'text-red-500' : 'text-blue-400'} ml-1`"
      >
        {{ player }}
      </span>
    </h3>

    <div class="flex flex-col items-center mb-8">
      <div v-for="(row, x) in board" :key="x" class="flex">
        <div
          v-for="(cell, y) in row"
          :key="y"
          @click="makeMove(x, y)"
          :class="`border border-white w-24 h-24 hover:bg-gray-700 flex items-center justify-center material-icons-outlined text-4xl cursor-pointer ${
            cell === 'X' ? 'text-red-500' : 'text-blue-400'
          }`"
        >
          {{ cell === 'X' ? 'close' : cell === '0' ? 'circle' : '' }}
        </div>
      </div>
    </div>

    <h2 v-if="winner" class="text-3x1 font-bold mb-8">
      Jogador
      <span :class="` ${winner === 'X' ? 'text-red-500' : 'text-blue-400'} `">
        {{ winner }}
      </span>
      ganhou!
    </h2>

    <button
      @click="resetGame"
      class="px-4 py-2 bg-red-500 rounded uppercase font-bold hover:bg-red-700 duration-300"
    >
      Resetar Jogo
    </button>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
html {
  background: #1f2937;
  color: #fff;
  font-family: 'Press Start 2P', cursive !important;
}
</style>
