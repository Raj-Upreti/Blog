<template>
    <div class="container-fluid">
        <div class="container">
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

            <!-- Visitors Graph and top shared starts -->
            <div class="row px-4 pt-5 justify-content-between">
                <div class="col-md-9 py-5">
                    <img class="" src="https://www.rankranger.com/www-img/web/docs/ver4/traffic-sources-bar-graph.jpg"
                        alt="" style="width:95%;">
                </div>

                <div class="col-md-3 pt-5">

                    <!-- Devices type -->
                    <div class="card text-center px-2 rounded-5" style="background-color:whitesmoke;">
                        <h5 class="fw-bold py-2">Used Devices</h5>
                        <img class="py-2" src="../../assets/pie-chart.png" alt="" style="object-fit:cover;">
                        <h6>Mobile-76.9%</h6>
                        <h6>Desktop-23.1%</h6>
                    </div>
                </div>

                <!-- Visitor graph and top shared ends -->
            </div>

            <div class="row px-4 py-5">

                <div class="col-md-9" style="padding-right:0.5rem;">

                    <!-- Recent posts table starts -->
                    <h5 class="px-3 py-2">Recent Articles</h5>

                    <!-- tables using vuetify -->
                    <VTable class="text-start" style="width:95%;">

                        <!-- table head starts  -->
                        <thead>
                            <tr>
                                <th class="text-start">
                                    SN
                                </th>

                                <th class="text-start">
                                    Date
                                </th>

                                <th class="text-start">
                                    Title
                                </th>

                                <th class="text-start">
                                    Category
                                </th>

                                <th class="text-start">
                                    Author
                                </th>
                            </tr>
                        </thead>
                        <!-- table head ends -->


                        <!-- table body starts -->
                        <tbody>

                            <!-- table row starts -->
                            <tr v-for="(data, index) in tableData" :key="index">
                                <td>{{ data.sn }}</td>
                                <td>{{ data.date }}</td>
                                <td>{{ data.title }}</td>
                                <td>{{ data.category }}</td>
                                <td>{{ data.author }}</td>
                            </tr>
                            <!-- table row ends -->

                        </tbody>
                        <!-- table body ends -->

                    </VTable>

                </div>
                <!-- Recent posts table ends -->

                <div class="col-md-3 py-5 text-center">
                    <div class="card rounded-5 " style="background-color:whitesmoke;">
                        <h4 class="py-2 fw-bold">Social Media Shared</h4>
                        <div class="d-flex px-5 text-center" v-for="(data, index) in socialMediaData" :key="index">
                            <img class="" :src="data.image" alt="" style="width:13%;height:10%;">
                            <p class="px-4">{{ data.name }}</p>
                            <p class="">{{ data.number }}</p>
                        </div>

                    </div>
                </div>


            </div>
        </div>

    </div>
</template>
  
  
  
<script setup>

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
  
  
  