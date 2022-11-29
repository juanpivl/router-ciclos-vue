<template>
  <h1>Pokemon page</h1>
  <h1>Pokemon : {{id}}</h1>
</template>

<script>

export default {
  props:{
    id:{
      type: Number,
      required: true
    },
  },

  data(){
    return{
      //id: this.$route.params.id
      pokemon: null
    }
  },
  created(){
    //const {id} = this.$route.params

    //console.log(id)
    //this.id=id
    this.getPokemon()
  },
  methods:{
    async getPokemon(){
      const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(r => r.json());
      console.log(pokemon)
      this.pokemon = pokemon
    }
  }
  
}
</script>

<style>

</style>