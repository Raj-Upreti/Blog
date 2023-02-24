<template>
    <div class="container-fluid py-4 border-bottom">
        <h5 class="px-5 fw-bold"> <font-awesome-icon icon="fa-light fa-arrow-trend-up" />Trending on Pasal</h5>
        <div class="row px-5 py-4" >
            <div class="col-lg-4 col-md-6" v-for="(topic, index) in topics" :key="index">
                <div class="row py-2 align-items-center">
                    <div class="col-md-4">
                        <img :src="topic.image" alt="" style="width:100%; object-fit:contain; height:6rem;">
                    </div>
                    <div class="col-md-8">
                        <p class="mb-2">{{ topic.author }}</p>
                        <h5 class="fw-bold">{{ topic.title }}</h5>
                        <div class="d-flex" style="font-size:0.8rem;">
                            <p>{{topic.readtime}} read</p>
                            <p class="mx-3  date">{{topic.date}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const topics = [
    {
        image: 'https://miro.medium.com/focal/112/112/50/50/0*6eHeV5x8tWLdiYpV.png',
        author: 'Mark Schaefer',
        title: 'I just earned my first revenue from ChatGPT and other observations',
        readtime: '15 min',
        date: '25 Jan'
    },
    {
        image: 'https://miro.medium.com/focal/112/112/50/50/1*XiVzB765eBip73jVQiAxkA.png',
        author: 'Josep Ferrer',
        title: '5 ChatGPT features to boost your daily work',
        readtime: '15 min',
        date: '26 Jan'
    },
    {
        image: 'https://miro.medium.com/focal/112/112/50/50/0*Ei3h_oQl4R7yKmTE',
        author: 'Enda',
        title: '12 AI Websites That Will Blow Your Mind',
        readtime: '15 min',
        date: '29 Jan'
    },
    {
        image: 'https://miro.medium.com/focal/112/112/50/50/1*jBqAOsjmedJVHwGbyP5PTw.jpeg',
        author: 'The PyCoach',
        title: '3 ChatGPT Extensions to Automate Your Life',
        readtime: '15 min',
        date: '17 Jan'
    },
    {
        image: 'https://miro.medium.com/focal/112/112/50/50/0*6h0h300r6FqggzRq',
        author: 'Ryan Holiday',
        title: 'If You Only Read A Few Books In 2023, Read These',
        readtime: '15 min',
        date: '20 Jan'
    },
    {
        image: 'https://miro.medium.com/focal/112/112/50/50/0*VxT8S3Z6iECV4l3m.jpg',
        author: 'Mina Pêcheux',
        title: '3 tips for optimising your Unity games',
        readtime: '15 min',
        date: '22 Jan'
    },
]
</script>


<style scoped>
.date::before{
    content: "\2022";
}
</style>