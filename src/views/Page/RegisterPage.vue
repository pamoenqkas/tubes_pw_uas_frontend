<template>
    <head>
  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js">
  
  <!-- Bootstrap Icon -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js">
  
  <!-- Bootstrap Icon -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
  
  </head>
  
  <main>
      <div class="container">
        <div class="card border-0 rounded shadow">
            <div class="text-center p-3">
                <h4>Register</h4>
                <form @submit.prevent="store">
                    <div class="form-group-mb-3">
                        <label class="form-label">Nama</label>
                        <input type="text" class="form-control" v-model="user.name" placeholder="Nama Pengguna">
                    </div>
                    <div class="form-group-mb-3">
                        <label class="form-label">Email</label>
                        <input type="text" class="form-control" v-model="user.email" placeholder="Email pengguna">
                    </div>
                    <div class="form-group-mb-3">
                        <label class="form-label">Password</label>
                        <input type="text" class="form-control" v-model="user.password" placeholder="Password">
                    </div>
                    <button type="submit"></button>
                    <button type="reset"></button>
                </form>
            </div>
            <div class="card-body">
            </div>
        </div>
      </div>
  </main>
  
  </template>
  
    <script>
import axios from 'axios'
import { useRoute } from 'vue-router'

export default {
    setup() {
        //reactive state
        const user = reactive({
            name: '',
            email: '',
            password: '',
        })

        const router = useRoute()
        
        function store(){
            let name = user.name
            let email = user.email
            let password = user.password

            axios.post('https://tubesuaswebbackend.itkitapro.com/api/register', {
                name: name,
                email: email,
                password: password
            })
        }
        //return
        return {
            user,
            router,
            store
        }
    }
}
  </script>
  
  <style>
  main {
  background-image: url(https://media.istockphoto.com/id/1309279439/photo/making-payments-the-simple-way.jpg?b=1&s=170667a&w=0&k=20&c=G2sJ4ZZanF7rfROgk4ie6ZTT6s5Q6bouWKFEu_0OcxU=);
  background-size: 100%;
}
</style>