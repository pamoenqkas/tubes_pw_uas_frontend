<template>
    <head>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js">
    <!-- Bootstrap Icon -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </head>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <router-link :to="{ name: 'components.home' }" class="bi-house-fill">Home</router-link>
        <div class="d-flex my-2 my-lg-0">
            <router-link :to="{ name: 'barang.keranjang' }" class="btn btn-success bi-bag-check-fill me-2">Keranjang</router-link>
            <!-- <span-if></span-if> -->
            <router-link :to="{ name: 'page.registerpage' }" class="btn btn-outline-success me-2">Register</router-link>
            <router-link :to="{ name: 'page.loginpage' }" class="btn btn-outline-success me-2">Login</router-link>
        </div>
      </div>
    </nav>
    <main>
        <router-view></router-view>
    </main>

    <footer class="fixed-bottom" style="background-color:aquamarine;">
    <!-- Copyright -->
    <div class="text-center p-3">
      
      <a class="bi bi-instagram"
        href="#!"
        role="button"
        style="font-size: 40px;
        color: #dd4b39;
        padding-right: 3cm;
        ">
    </a>

      <a
        class="bi bi-facebook"
        href="#!"
        role="button"
        style="font-size: 40px;
        color: lightskyblue;
        padding-right: 3cm;
        ">
      </a>

      <a
      class="bi bi-twitter"
        href="#!"
        role="button"
        style="font-size: 40px;
        color: lightskyblue;
        padding-right: 3cm;
        ">
      </a>
      <a 
      style="
      padding-right: 3cm;">
        (nomor telepon)
      </a>
      <a
      style="
      padding-right: 3cm;">about us</a>
      

    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.3);">
      E-Commerce Web by Kelompok G
    </div>
    <!-- Copyright -->
  </footer>
    
  </template>
    <script>
    export default {
    }
    </script>