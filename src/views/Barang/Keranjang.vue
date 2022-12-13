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
                                <div class="card mb-3 text-center" style="max-width: 540px;">
                                    <div class="align-items-center row row g-0">
                                        <div class="col-md-4">
                                            <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/9/c05793bd-7c95-419f-885c-843a7d3985e9.png" class="card-img-top" alt="...">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h3 class="card-title">Card title</h3>
                                                <h5 class="card-title">RP 100000</h5>
                                                <div class="card" style="max-width: 540px;">
                                                    <p class="bi-plus-circle-dotted"></p>
                                                    <p>2</p> 
                                                    <p class="bi-plus-circle-dotted"></p>
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
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
    setup() {
        //state keranjang
        const keranjang = reactive({
            idKeranjang:'',
            namaBarang: '',
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {
            let idKeranjang = keranjang.idKeranjang
            let namaBarang = keranjang.namaBarang
            axios.post('http://localhost:8000/api/proyeks', {
                idKeranjang: idKeranjang,
                namaBarang: namaBarang,
            }).then(() => {
                //redirect ke post index
                router.push({
                    name: 'barang.keranjang'
                })
            }).catch(error => {
                //assign state validation with error
                validation.value = error.response.data
            })
        }
        //return
        return {
            keranjang,
            validation,
            router,
            store
        }
    }
}
</script>
<style>
</style>