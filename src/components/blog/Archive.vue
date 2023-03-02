<template>
    <!-- Blog Archive Page Main Component -->
    <div class="container container-fluid p-5">

        <!-- Column Section Start -->
        <div class="row py-3">

            <!-- Cloumn Left Start -->
            <div class="col-md-7 border-end px-4">

                <!-- Primary Heading : Category Name -->
                <div class="d-flex align-items-center mb-5">
                    <div class="tag-icon me-2">
                        <i class="fa-solid fa-tag fs-5"></i>
                    </div>
                    <h2 class="fw-bold h1">Programming</h2>
                </div>

                <BlogHomeList post="programming" />
            </div>
            <!-- Cloumn Left End -->

            <!-- Cloumn Right Start -->
            <div class="col-md-5 px-4 position-sticky" style="top:6rem; height:0rem;">
                <div class="py-4 related-topics">
                    <button class="btn btn-light rounded-9 mb-2 text-capitalize me-2">
                        Python
                    </button>
                    <button class="btn btn-light rounded-9 mb-2 text-capitalize me-2">
                        Java Script
                    </button>
                    <button class="btn btn-light rounded-9 mb-2 text-capitalize me-2">
                        Software
                    </button>
                    <button class="btn btn-light rounded-9 mb-2 text-capitalize me-2">
                        Web Development
                    </button>
                    <button class="btn btn-light rounded-9 mb-2 text-capitalize me-2">
                        AI
                    </button>
                    <button class="btn btn-light rounded-9 mb-2 text-capitalize me-2">
                        Data Science
                    </button>
                    <button class="btn btn-light rounded-9 mb-2 text-capitalize me-2">
                        Machine Learning
                    </button>
                    <button class="btn btn-light rounded-9 mb-2 text-capitalize me-2">
                        Ruby
                    </button>
                    <button class="btn btn-light rounded-9 mb-2 text-capitalize me-2">
                        Coding
                    </button>
                </div>

                <div class="section">
                    <div class="bg-secondary w-100" style="height:27rem;">

                    </div>
                </div>
            </div>
            <!-- Cloumn Right End -->
        </div>
        <!-- Column Section End -->
    </div>
</template>


<style scoped>
.related-topics button {
    background-color: rgba(242, 242, 242, 1);
    font-size: 14px;
    font-weight: 400;
}

.tag-icon {
    padding: 1rem;
    background-color: rgb(237, 237, 237);
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

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

