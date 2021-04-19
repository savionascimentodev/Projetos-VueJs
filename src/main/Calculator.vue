<template>
  <div class="calculator "
  >  
    <Display :value="displayValue" />
    <Button label="AC" double @onClick="clearMemory" />
    <Button label="<-" @onClick="apagarAnterior" />
    <Button label="/" operation @onClick="setOperation" />
    <Button label="7" @onClick="addDigit"  />
    <Button label="8" @onClick="addDigit" />
    <Button label="9" @onClick="addDigit" />
    <Button label="*" operation @onClick="setOperation" />
    <Button label="4" @onClick="addDigit" />
    <Button label="5" @onClick="addDigit" />
    <Button label="6" @onClick="addDigit" />
    <Button label="-" operation @onClick="setOperation" />
    <Button label="1" @onClick="addDigit" />
    <Button label="2" @onClick="addDigit" />
    <Button label="3" @onClick="addDigit" />
    <Button label="+" operation @onClick="setOperation" />
    <Button label="0" double @onClick="addDigit" />
    <Button label="." @onClick="addDigit" />
    <Button label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>

import Button from "../components/Button";
import Display from "../components/Display";

export default {
  data: function () {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0 , 0],
      current: 0,
    };
  },
  components: { Button, Display },
  
  mounted() {
    window.addEventListener("keypress", k => {    
      this.addDigit(String.fromCharCode(k.keyCode));      
    })
      // Função que adiciona, o modo de pressionar pelo teclado;    

    window.addEventListener("keydown", event => {
      if ( event.keyCode === 8 || event.keyCode === 46 ) 
         this.apagarAnterior()
       // Função que habilita a possibilidade de excluir os caracteres com as teclas BacksSpace e Del; 
    })

    window.addEventListener("keydown", event => {
      if ( event.keyCode === 32 ) 
         return false
       // Função que habilita a possibilidade de excluir os caracteres com as teclas BacksSpace e Del; 
    })

    window.addEventListener("keydown", cc => {
      if ( cc.keyCode < 48 || cc.keyCode > 57 || cc.keyCode == 190) 
        this.addDigit()
    }) // Função que só permite digitar os caracteres e o ponto DAR UMA OLHADA;
    
    window.addEventListener("keydown", event => {
      if ( event.keyCode === 13 ) 
        this.setOperation()
       // Função que habilita a tecla Enter dar o resultado dos caracteres;
    })
    
  }, 
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
      // Essa função faz o objeto voltar ao seu estado inicial;
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation;
        this.current = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === "=";
        const currentOperation = this.operation;

        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          );
        } catch (e) {
          this.$emit("onError", e);
        }

        this.values[1] = 0;

        this.displayValue = this.values[0];
        this.operation = equals ? null : operation;
        this.current = equals ? 0 : 1;
        this.clearDisplay = !equals;
      }
    },
    addDigit(digito) {        
      if (digito === "." && this.displayValue.includes(".")) {
        return;
      } 
      else if(isNaN(digito)){
        return 
      } // Condicional que não permite digitar outros caracteres só números; 

      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;
      const displayValue = currentValue + digito;

      this.displayValue = displayValue;
      this.clearDisplay = false;

      // Alternativa 1
      this.values[this.current] = displayValue;

      // Alternativa 2
      // if (n !== ".") {
      //     const i = this.current
      //     const newValue = parseFloat(displayValue)
      //     this.values[i] = newValue
      // }
    },
    apagarAnterior() {
      let inputText = this.displayValue;
      this.displayValue = this.displayValue.substring(0,inputText.length-1);
    }, // Função que apaga o ultimo caractere digitado;
  },
};
</script>

<style>
.calculator {
  height: 360px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px 48px;
}
</style>