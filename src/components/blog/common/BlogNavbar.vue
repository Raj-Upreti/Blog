<template>
  <div ref="navbarWrapper" class="text-white">
    <nav
      ref="navbar"
      id="navbar"
      class="navbar navbar-expand-lg fw-bold bg-white py-2 px-5 border-bottom fixed-top"
      style="background-color:#A9A9A9"
    >
      <div class="container-fluid">
        <a class="navbar-brand fs-3 fw-bold" href="/">Saauzi</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
            <li class="nav-item">
              <router-link
                to="/login"
                class="nav-link btn btn-primary rounded-9 px-3 text-white"
              >LogIn</router-link>
            </li>

            <form @submit.prevent="searchCategories">
              <div class="input-group position-relative">
                <input
                  type="text"
                  class="form-control border-0 border-bottom ps-4"
                  placeholder="Search"
                  aria-label="Search"
                  v-model="searchText"
                />
                <button class="input-group-text border-0 bg-transparent" type="submit">
                  <i
                    class="fas fa-search text-secondary position-absolute start-0"
                    style="z-index:999;"
                  ></i>
                </button>
              </div>
            </form>

          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { useblogCategory } from '../../../store/blogCategory'

const navbar = ref(null);
const navbarWrapper = ref(null);
const categoryStore = useblogCategory()


onMounted(() => {
  let mb = navbar.value.clientHeight;
  navbarWrapper.value.style = `margin-bottom: ${mb}px`;
});

const router = useRouter();

const searchText = ref('')

// search category
const searchCategories = () => {
  
    router.push({ name: 'search', params: { slug: searchText.value }});

}
</script>


<style scoped>
.form-control:focus {
  border-color: #f1f1f1;
  outline: none;
  box-shadow: none;
}
</style>