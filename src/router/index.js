import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home"
import Produto from "@/views/Produto"
import Login from "@/views/Login"
import Usuario from "@/views/usuario/Usuario"
import UsuarioProdutos from "@/views/usuario/UsuarioProdutos"
import UsuarioVendas from "@/views/usuario/UsuarioVendas"
import UsuarioCompras from "@/views/usuario/UsuarioCompras"
import UsuarioEditar from "@/views/usuario/UsuarioEditar"


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: Produto,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/usuario",
    component: Usuario,
    children: [
      {
        path: "",
        name: "usuario",
        component: UsuarioProdutos
      },
      {
        path: "compras",
        name: "compras",
        component: UsuarioCompras
      },
      {
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar
      }
    ]  
  },
]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router;
