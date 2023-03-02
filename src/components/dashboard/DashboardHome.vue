<template>
    <div class="container">
        <div class="p-5">
            <!-- Counts records -->
            <div class="row py-2">
                <div class="col-md-3" v-for="(data, index) in cardData" :key="index">
                    <div class="card border-0 p-4 rounded-2">
                        <div class="d-flex">
                            <div class="px-4">
                                <div class="d-flex">
                                    <img :src="data.image" class="pe-2" style="width:15%; object-fit:contain;" />
                                    <p>{{ data.name }}</p>
                                </div>
                                <p class="fs-1 fw-bold">{{ data.number }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Visitors Graph  -->
            <div class="row pt-3 justify-content-between">


                <div class="col-md-9 py-5 pe-5">
                    <!-- <p class="h5 fw-bold">visitors Graph</p> -->
                    <WebChart />

                    <div class="py-5 my-5">
                        <!-- Recent posts table starts -->
                        <h5 class=" py-2">Recent Articles</h5>

                        <!-- DataTable Satrts -->
                        <DataTable class="display" :columns="column" :data="data" :options="options" ref="table">
                        </DataTable>

                    </div>
                    <!-- Recent posts table ends -->
                </div>


                <!-- Visitor graph ends -->

                <div class="col-md-3 mt-4 pt-5">

                    <!-- Devices type -->
                    <div class="card text-center px-2 rounded-3" style="background-color:whitesmoke;">
                        <h5 class="fw-bold py-2">Used Devices</h5>
                        <img class="py-2" src="../../assets/pie-chart.png" alt="" style="object-fit:cover;">
                        <h6>Mobile-76.9%</h6>
                        <h6>Desktop-23.1%</h6>
                    </div>

                    <div class="py-5">

                        <div class="card rounded-3 pt-2 " style="background-color:whitesmoke;">
                            <div class="card-body">
                                <h4 class=" fw-bold">Social Media Shared</h4>
                                <div class="d-flex py-2 text-center" v-for="(data, index) in socialMediaData" :key="index">
                                    <img class="" :src="data.image" alt="" style="width:13%;height:8%;">
                                    <p class="px-2">{{ data.name }}</p>
                                    <p class="">{{ data.number }}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
  
  
  
<script setup>

import { ref } from 'vue';
import WebChart from '../dashboard/common/WebChart.vue';

import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net';
import 'datatables.net-select';
DataTable.use(DataTablesLib);

let dt;
const table = ref();

const column = [
    { title: "SN", data: "Serial_number" },
    { title: "Published Date", data: "date" },
    { title: "Title", data: "title" },
    { title: "Category", data: "category" },
    { title: "Author", data: "author" },
];

const options = {
    dom: "Blftipr", select: true, ordering: false, info: true
};

const data = [
    { Serial_number: '1', date: '2023-1-2', title: 'Yoga', category: 'Self Improvement', author: 'Dr. Ramanand' },
    { Serial_number: '2', date: '2023-1-21', title: 'Artificial Intelligence', category: 'AI', author: 'Mr.Alex' },
    { Serial_number: '3', date: '2023-1-25', title: 'Spiritual Life', category: 'Self Improvement', author: 'SaadGuru' },
    { Serial_number: '4', date: '2023-1-29', title: 'Family life', category: 'Family', author: 'Rupesh' },
    { Serial_number: '5', date: '2023-2-1', title: 'About Nepal', category: 'Nation', author: 'Balen' },
    { Serial_number: '6', date: '2023-2-10', title: 'Coding in Js', category: 'Programming', author: 'Mosh' },
    { Serial_number: '7', date: '2023-2-14', title: 'Good Writing', category: 'Writing', author: 'Arjun' },
    { Serial_number: '8', date: '2023-2-18', title: 'Coding Nicely', category: 'Programming', author: 'Harry' },
    { Serial_number: '9', date: '2023-2--20', title: 'Politics Influence', category: 'Politics', author: 'Rajan' },
    { Serial_number: '10', date: '2023-2-24', title: 'Introduction to ML', category: 'ML', author: 'Er.Carlo' },
    { Serial_number: '11', date: '2023-2-28', title: 'Self Charging Battery', category: 'Technology', author: 'Harvely' },
]

const cardData = [
    {
        image: 'https://cdn-icons-png.flaticon.com/512/2118/2118701.png',
        name: 'Subscribers',
        number: '1000+'
    },
    {
        image: 'https://static.thenounproject.com/png/2818902-200.png',
        name: 'Posts',
        number: '8+'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/3502/3502685.png',
        name: 'Category',
        number: '50+'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/1380/1380338.png',
        name: 'Comments',
        number: '200+'
    }
];

const socialMediaData = [
    {
        image: "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png",
        name: 'FaceBook',
        number: '150+'
    },

    {
        image: "https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/instagram-512.png",
        name: 'Instagram',
        number: '50+'
    },

    {
        image: "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png",
        name: 'Telegram',
        number: '200+'
    },

    {
        image: "https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png",
        name: 'WhatsApp',
        number: '250+'
    },

    {
        image: "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png",
        name: 'Twitter',
        number: '60+'
    },
];

const tableData = [
    {
        sn: 1,
        date: '2023-2-10',
        title: 'ChatGpt',
        category: 'Information Technology',
        author: 'Mark Ale'
    },
    {
        sn: 2,
        date: '2023-1-10',
        title: 'jchqkj',
        category: 'Information Technology',
        author: 'kjnk'
    },
    {
        sn: 3,
        date: '2022-12-10',
        title: 'Abc',
        category: 'Information Technology',
        author: 'Mark Ale'
    },
    {
        sn: 4,
        date: '2023-1-11',
        title: 'Integrating Bootstrap',
        category: 'Programming',
        author: 'Er. Harry'
    },
    {
        sn: 5,
        date: '2023-2-15',
        title: 'Making Pickle',
        category: 'Cooking',
        author: 'Chef Shah'
    }
]

</script>

<style>
@import "datatables.net-buttons-dt";
@import "datatables.net-select-dt";
@import 'datatables.net-dt';
</style>
  
  
  