<template>
    <div>
        <!-- DashboardSidebar begins -->
        <img class="py-3 px-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYgQXpEhtQfGdzH8_2XH-VPDzs3g7VmmP8xgDxRntZlvV3wUdz2sJgdDOTHS9MwmU78KI&usqp=CAU"
            alt="" style="object-fit:cover; width:100%; height: 6rem;">
        <div class="" style="padding-top:3rem;">
            <div class="fw-bold">

                <div class="py-5 px-3">
                    <router-link class="d-flex" style="text-decoration:none;" to='/dashboard'>
                        <p class="text-white">Home</p>
                    </router-link>
                </div>

                <div class="py-5 px-3">

                    <router-link class="d-flex" style="text-decoration:none;" to='/dashboard/postcollection'>
                        <p class="text-white">Posts</p>
                    </router-link>
                </div>

                <div class="py-5 px-3">

                    <router-link style="text-decoration:none;" to='/dashboard/categorycollection'>
                        <p class="text-white">Category</p>
                    </router-link>
                </div>

            </div>
        </div>
        <!-- <DashboardSidebar /> -->
    </div>
</template>


<script setup>
// import { link } from 'fs';

// const activePage= window.location.pathname;
// const navLinks= document.querySelectorAll('p').
//     forEach(link => {
//         if(link.href.includes(`${activePage}`)){
//             link.classList.add('active');
//         }
//     })
</script>


<style>
p {
    margin-bottom: 0 !important;
}
</style>