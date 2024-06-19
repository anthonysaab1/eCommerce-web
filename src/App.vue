<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <RouterLink :to="{ name: 'home' }">
          <img
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13e6eaaad5828372464f73a1a4.svg"
            alt="ComfySloth"
          />
        </RouterLink>
      </div>

      <div>
        <nav>
          <RouterLink :to="{ name: 'home' }" class="navBtns">Home</RouterLink>
          <RouterLink :to="{ name: 'about' }" class="navBtns">About</RouterLink>
          <RouterLink :to="{ name: 'products' }" class="navBtns">Products</RouterLink>
        </nav>
      </div>
      <div>
        <RouterLink :to="{ name: 'cart' }">
          <span
            >cart
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1rem">
              <path
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </span>
        </RouterLink>
        <span
          >login
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1rem">
            <path
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
            /></svg
        ></span>
      </div>
    </div>
  </header>

  <RouterView />
  <footer><span>© 2024 ComfySloth All rights reserved</span></footer>
</template>
<script setup>
import { provide } from 'vue'
import { usefetch } from '@/composables/useFetch'
const { ListOfProducts } = usefetch()

provide('ListOfProducts', ListOfProducts)
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  font-size: 35px;
  text-align: center;
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: #ab7a5f;
}
.navBtns:hover {
  border-bottom: 2px solid #ab7a5f;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

.wrapper {
  gap: 300px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
}
footer {
  height: 5rem;
  display: flex;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #222;
}
footer span {
  color: white;
}
</style>
