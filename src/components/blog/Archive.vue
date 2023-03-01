<template> 
        <!-- Blog Archive Page Main Component -->
        <div class="container container-fluid p-5">

            <div>
                
            </div>
            
            <!-- Column Section Start -->
            <div class="row py-3">

                <!-- Cloumn Left Start -->
                <div class="col-md-6">

                    <!-- Primary Heading : Category Name -->
                    <h1>Programming</h1>

                    <!-- Divider -->
                    <hr>

                    <BlogHomeList post="programming" />
                </div>
                <!-- Cloumn Left End -->

                <!-- Cloumn Right Start -->
                <div class="col-md-4 position-sticky" style="top:2rem; height:0rem;">
                    <h6 class="fw-bold">Discover related topic</h6>
                    <div class="py-4">
                        <RouterLink to="/python"><button class="btn btn-light rounded-4 m-2">Pyhton</button>
                        </RouterLink>
                        <button class="btn btn-light rounded-4">Java Script</button>
                        <button class="btn btn-light rounded-4 mx-2">Software</button>
                        <button class="btn btn-light rounded-4 mx-2">Web Development</button>
                        <button class="btn btn-light rounded-4 m-2">AI</button>
                        <button class="btn btn-light rounded-4">Data Science</button>
                        <button class="btn btn-light rounded-4 mx-2">Machine Learning</button>
                        <button class="btn btn-light rounded-4 mx-2">Ruby</button>
                        <button class="btn btn-light rounded-4">Coding</button>
                    </div>
                    <img src="https://i.pinimg.com/736x/2a/51/29/2a51299e637a606f3ea038822ecc33a7.jpg" alt=""
                        style="width:100%; height:">

                </div>
                <!-- Cloumn Right End -->
            </div>
            <!-- Column Section End -->
        </div>
</template>


<style scoped>
.readtime::before,
.readtime::after {
    content: "\2022";
    padding: 0 0.4rem;
}

.button-section p {
    margin-bottom: 0;
}
</style>

<script setup>
import BlogHomeList from './main_page/BlogHomeList.vue';




const programs = [
    {
        image: 'https://miro.medium.com/fit/c/224/224/1*fbEzN2RUOmSc1gkcBuHdwQ.png',
        author: 'Thanesh Pannirselvam',
        title: 'ChatGPT for Coders: 3 Practical Ways to Optimise your Workflow',
        details: 'Since the release of ChatGPT, I’ve seen plenty of discussion on the internet about what it might mean for the future of programming',
        date: '11 Jan',
        readtime: '7 min read',
        category: 'Programming',
    },
    {
        image: 'https://miro.medium.com/fit/c/224/224/1*fbEzN2RUOmSc1gkcBuHdwQ.png',
        author: 'Thanesh Pannirselvam',
        title: 'ChatGPT for Coders: 3 Practical Ways to Optimise your Workflow',
        details: 'Since the release of ChatGPT, I’ve seen plenty of discussion on the internet about what it might mean for the future of programming',
        date: '11 Jan',
        readtime: '7 min read',
        category: 'Programming',
    },

    {
        image: 'https://miro.medium.com/fit/c/224/224/1*fbEzN2RUOmSc1gkcBuHdwQ.png',
        author: 'Thanesh Pannirselvam',
        title: 'ChatGPT for Coders: 3 Practical Ways to Optimise your Workflow',
        details: 'Since the release of ChatGPT, I’ve seen plenty of discussion on the internet about what it might mean for the future of programming',
        date: '11 Jan',
        readtime: '7 min read',
        category: 'Programming',
    },

    {
        image: 'https://miro.medium.com/fit/c/224/224/1*fbEzN2RUOmSc1gkcBuHdwQ.png',
        author: 'Thanesh Pannirselvam',
        title: 'ChatGPT for Coders: 3 Practical Ways to Optimise your Workflow',
        details: 'Since the release of ChatGPT, I’ve seen plenty of discussion on the internet about what it might mean for the future of programming',
        date: '11 Jan',
        readtime: '7 min read',
        category: 'Programming',
    },

    {
        image: 'https://miro.medium.com/fit/c/224/224/1*fbEzN2RUOmSc1gkcBuHdwQ.png',
        author: 'Thanesh Pannirselvam',
        title: 'ChatGPT for Coders: 3 Practical Ways to Optimise your Workflow',
        details: 'Since the release of ChatGPT, I’ve seen plenty of discussion on the internet about what it might mean for the future of programming',
        date: '11 Jan',
        readtime: '7 min read',
        category: 'Programming',
    },

    {
        image: 'https://miro.medium.com/fit/c/224/224/1*fbEzN2RUOmSc1gkcBuHdwQ.png',
        author: 'Thanesh Pannirselvam',
        title: 'ChatGPT for Coders: 3 Practical Ways to Optimise your Workflow',
        details: 'Since the release of ChatGPT, I’ve seen plenty of discussion on the internet about what it might mean for the future of programming',
        date: '11 Jan',
        readtime: '7 min read',
        category: 'Programming',
    },

    {
        image: 'https://miro.medium.com/fit/c/224/224/1*fbEzN2RUOmSc1gkcBuHdwQ.png',
        author: 'Thanesh Pannirselvam',
        title: 'ChatGPT for Coders: 3 Practical Ways to Optimise your Workflow',
        details: 'Since the release of ChatGPT, I’ve seen plenty of discussion on the internet about what it might mean for the future of programming',
        date: '11 Jan',
        readtime: '7 min read',
        category: 'Programming',
    },

    {
        image: 'https://miro.medium.com/fit/c/224/224/1*fbEzN2RUOmSc1gkcBuHdwQ.png',
        author: 'Thanesh Pannirselvam',
        title: 'ChatGPT for Coders: 3 Practical Ways to Optimise your Workflow',
        details: 'Since the release of ChatGPT, I’ve seen plenty of discussion on the internet about what it might mean for the future of programming',
        date: '11 Jan',
        readtime: '7 min read',
        category: 'Programming',
    },
]
</script>

