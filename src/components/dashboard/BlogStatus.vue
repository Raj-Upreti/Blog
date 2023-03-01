<template>
    <div class="container container-fluid text-center">
        <h1>Our Blogs</h1>
        <div class="pt-5">
            <form>
                <div class="form-group">
                    <label class="fs-5" for="search">Search Blogs</label> <br>
                    <input class="" type="search" placeholder="search here.." style="width:25%;">
                    <button type="search" class="mx-3 btn btn-sm btn-success rounded-3">Search</button>
                    <router-link to="/dashboard/addblog">
                        <input type="button" class="btn text-white btn-primary mx-5" value="Add new Blog">
                    </router-link>

                </div>

                <div class="row py-5">
                    <div class="col-md-6 text-start">
                        <button class="btn btn-light mx-3">All</button>
                        <button class="btn btn-light mx-3">Published</button>
                        <button class="btn btn-light mx-3">Draft</button>
                    </div>
                </div>

                <table class="table table-bordered mx-3">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        <th>ChatGPT</th>
                        <th><button class="btn btn-success btn-sm">published</button></th>
                        <th>Today 1:30 PM</th>
                        <th><button class="btn btn-light btn-sm">View</button></th>
                    </tbody>

                    <tbody>
                        <th>Yoga</th>
                        <th><button class="btn btn-success btn-sm">In Draft</button></th>
                        <th>Jan 15 3:00 PM</th>
                        <th><button class="btn btn-light btn-sm">View</button></th>
                    </tbody>

                </table>
            </form>
        </div>
    </div>
</template>


<script setup>

</script>


<style></style>