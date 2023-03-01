<template>
        <div class="container container-fluid p-4">
            <div class="row">
                <div class="col-md-8 border-end">
                    <h1 class="fw-bold py-4">ChatGPT for Coders: 3 Practical Ways to Optimise your Workflow</h1>
                    <img src="https://miro.medium.com/max/1400/1*OVhfYqPzT-biY3G6tU17xA.webp" alt="" style="width:95%;">
                    <div style="font-size:1.5rem; font-family:'Times New Roman', Times, serif">
                        <p class="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut laudantium esse debitis ex nesciunt, suscipit fuga repudiandae officia corrupti recusandae dolore animi atque, quae, ullam tempore ipsam sunt adipisci blanditiis?</p>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non neque nisi obcaecati cupiditate
                            voluptates repellendus id quidem ad laboriosam adipisci ea quas qui perspiciatis ratione
                            veritatis molestiae ut enim, maxime ab. Quod, nihil tenetur! Inventore exercitationem
                            voluptate pariatur culpa. Porro dignissimos voluptas reprehenderit aut impedit, quos
                            officiis culpa delectus magni perferendis magnam, ab libero eveniet cum eaque voluptatibus
                            aliquam ipsum. Quos nemo, quae pariatur quibusdam perspiciatis placeat veritatis, cum
                            assumenda repellendus id voluptatem esse nesciunt, distinctio obcaecati! A, sequi officia
                            ducimus quas voluptatibus doloremque quia hic vero dicta at sunt ullam aperiam cum amet,
                            nobis sapiente velit rem voluptas. Minima?
                        </p>

                        <p class="fw-bold pt-4">Here’s the exact prompt I used to achieve all this:</p>
                        <img src="https://miro.medium.com/max/1400/1*Th35nz_cyJ2mQDS6HszKZw.webp" alt=""
                            style="width:95%;">

                        <p class="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
                            voluptas exercitationem in tenetur deserunt iure vero deleniti fugit? Dolorum ab impedit
                            voluptates assumenda consequuntur, sit incidunt repellat sed consequatur recusandae vel amet
                            autem soluta unde facilis, eos repudiandae cumque. Architecto nihil molestias vitae commodi
                            asperiores quam deleniti praesentium saepe, reiciendis provident voluptatem quaerat illo qui
                            ducimus odio adipisci vel minus voluptas molestiae officia unde facilis officiis! Voluptatum
                            veniam consequuntur aliquam qui. Quasi sint numquam sunt aliquid quam, neque dolor tempora.
                            Aliquam, id maiores quisquam quo odio obcaecati perferendis. Velit facere nobis corrupti
                            facilis sint harum eligendi, tempore non. Rem animi provident quaerat deleniti dolorum
                            voluptatem dolor consequatur expedita blanditiis, veritatis ipsum nulla eum optio odio nisi
                            dolorem aliquid modi sapiente asperiores aut praesentium, accusamus dolores! Sequi ratione
                            possimus blanditiis amet reprehenderit, deleniti, ullam quisquam modi, architecto impedit
                            labore in mollitia atque magni fuga cum veritatis dicta earum nihil! Temporibus,
                            consequuntur.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque maxime perspiciatis
                            quidem inventore facere? Officiis unde porro ad atque odit enim eos impedit voluptatem.
                            Sapiente, dignissimos ipsam at perferendis tenetur accusamus earum molestias cupiditate,
                            numquam non fuga repellat modi officia repudiandae omnis, maxime sequi nobis ratione
                            obcaecati cum. Accusamus corrupti maiores consequatur, asperiores sequi, odit minima dolorem
                            itaque quis ducimus assumenda recusandae? Dolor, aliquam? Dolorem, autem blanditiis!
                            Voluptatum quaerat nisi totam assumenda praesentium itaque expedita, officiis, minus ducimus
                            perferendis soluta accusantium adipisci veritatis commodi. Reiciendis esse doloremque
                            inventore, dolor sed laborum voluptatem nisi, aperiam unde a error ad molestias!</p>
                    </div>
                </div>
                <div class="col-md-4 p-4 position-sticky" style="top:6rem; height:0rem;">
                    <div class="h5 fw-bold">More from Pasal</div>
                    <hr>
                    <div class="row pb-3 align-items-center" v-for="(blog, index) in blogs" :key="index">
                        <div class="col-md-8">
                            <!-- <p class="mb-2">{{ blog.author }}</p> -->
                            <h6 class="fw-bold">{{ blog.title }}</h6>
                        </div>
                        <div class="col-md-4">
                            <img :src="blog.image" alt="" style="width:80%; object-fit:cover; height:5rem;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
const blogs = [
    {
        author: 'Mark Schaefer',
        title: 'I just earned my first revenue from ChatGPT and other observations',
        image: 'https://miro.medium.com/focal/112/112/50/50/0*6eHeV5x8tWLdiYpV.png'
    },

    {
        author: 'Josep Ferrer',
        title: '5 ChatGPT features to boost your daily work',
        image: 'https://miro.medium.com/focal/112/112/50/50/1*XiVzB765eBip73jVQiAxkA.png'
    },

    {
        author: 'Enda',
        title: '12 AI Websites That Will Blow Your Mind',
        image: 'https://miro.medium.com/focal/112/112/50/50/0*Ei3h_oQl4R7yKmTE'
    },

    {
        author: 'The PyCoach',
        title: '3 ChatGPT Extensions to Automate Your Life',
        image: 'https://miro.medium.com/focal/112/112/50/50/1*jBqAOsjmedJVHwGbyP5PTw.jpeg'
    },

    {
        author: 'Ryan Holiday',
        title: 'If You Only Read A Few Books In 2023, Read These',
        image: 'https://miro.medium.com/focal/112/112/50/50/0*6h0h300r6FqggzRq'
    },
]
</script>

<style scoped>

</style>