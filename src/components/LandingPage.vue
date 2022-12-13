<template>
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js">

<!-- Bootstrap Icon -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
<main>
    <router-view></router-view>
    <div class="m-4">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" width="auto">
            <div class="carousel-inner" >
                <div class="carousel-item active">
                    <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/12/11/d045e0a4-91e9-4f40-bb5c-6314da90150e.jpg.webp?ect=3g" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/12/8/a1617fc5-cd92-4fa8-aff7-127fd7c9fc93.jpg.webp?ect=3g" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/12/8/4caf8466-6b48-4af4-9e0f-f13aa624a7c1.jpg.webp?ect=3g" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <div class="card h-50 m-4">
        <div class="m-4">
            <h5>Product</h5>
            <div class="m-4">
                <div class="row row-cols-1 row-cols-md-6 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/9/12/fe20fea9-a892-45fe-b536-cd409f4b75c2.jpg" class="card-img-top" alt="asd" width="200">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <a href="#" class="btn btn-primary">Detail Barang</a>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/12/9/c05793bd-7c95-419f-885c-843a7d3985e9.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href="#" class="btn btn-primary">Detail Barang</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2021/11/23/40062e1e-cbab-4e40-a081-6ed0e7f18fda.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Detail Barang</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/10/14/49972e81-85f9-49e5-a451-3e849e196ee6.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href="#" class="btn btn-primary">Detail Barang</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/30/f7062f18-d485-49af-bc47-800f8c0272f9.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href="#" class="btn btn-primary">Detail Barang</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/7/24/a6197fb9-5da8-4a41-9864-246523cfaff1.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href="#" class="btn btn-primary">Detail Barang</a>
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
export default {
}
</script>