import {createRouter,createWebHashHistory} from 'vue-router'






const routes = [
    {path: '/', component: ()=>import(/*webpackChunkName: "ListPAge*/'../modulos/pokemon/pages/ListPage')},
    {path: '/about', component: ()=>import(/*webpackChunkName: "AboutPage*/'../modulos/pokemon/pages/AboutPage')},
    {path: '/:id',name: 'pokemonid', component: ()=>import(/*webpackChunkName: "PokemonPage*/'../modulos/pokemon/pages/PokemonPage'),
    props:(route) =>{
        const {id} = Number(route.params.id);
        return isNaN (Number(id)) ? {id:1} :{id}
    }
},
    {path: '/:pathMatch(.*)*', component: ()=>import(/*webpackChunkName: "NotPageFound*/'../modulos/shared/pages/NotPageFound')}
]


const router = createRouter({
    // Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })


  export default router