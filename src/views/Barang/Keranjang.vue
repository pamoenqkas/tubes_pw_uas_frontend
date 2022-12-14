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
    <main>
        <div class="card h-100 m-4">
            <div class="h -m-4">
                <h1>Keranjang</h1>
                <div class="m-4">
                    <div class="row-cols-5 row-cols-md-6 g-4">
                        <div class="col">
                            <div class="p-3">
                            <h3>Toko A</h3>
                                <div v-for="(keranjang, id) in keranjangs" :key="id">
                                    <div class="card mb-3 text-center" style="max-width: 540px;">
                                        <div class="align-items-center row row g-0">
                                            <div class="col-md-8">
                                                <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/9/c05793bd-7c95-419f-885c-843a7d3985e9.png" class="card-img-top" alt="...">
                                                <div class="card-body">
                                                    <h3 class="card-title">{{ keranjang.idBarang }}</h3>
                                                    <h5 class="card-title">{{ keranjang.idUser }}</h5>
                                                    <h5 class="card-title">{{ keranjang.gambarBarang }}</h5>
                                                    <!-- <p>-</p>
                                                    <p class="card-text">{{ keranjang.kuantitas }}</p>
                                                    <p>+</p> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

</template>
<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
// import { reactive, ref } from'vue'
// import { useRouter } from 'vue-router'

export default {
    setup() {
        //reactive state
        let keranjangs = ref([])
        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('https://tubesuaswebbackend.itkitapro.com/api/keranjang')
            .then(response => {
                //assign state posts with response data
                keranjangs.value = response.data
                console.log(response.data.data)
            }).catch(error => {
                console.log(error.response.data)
            })
        })
        //return
        return {
            keranjangs
        }
    }
}
</script>
<style>
</style>