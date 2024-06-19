<template>
  <div class="homeTemplate">
    <div class="desc">
      <h1>Design Your Comfort Zone</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis
        doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et
        quia tempora excepturi quis alias?
      </p>
      <RouterLink :to="{ name: 'products' }">
        <button id="ShowBtn">ShopNow</button>
      </RouterLink>
    </div>
    <div class="imagesSrc">
      <img
        src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"
        alt="HomePic"
        class="HomePic"
      />
      <img
        src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg"
        alt="PersonWork"
        class="PersonWork"
      />
    </div>
  </div>
  <div class="featured">
    <featuredproduct></featuredproduct>
  </div>
  <div class="custom">
    <customFurniture></customFurniture>
  </div>
  <div class="newsLetter">
    <newsLetter></newsLetter>
  </div>
</template>
<script setup>
import customFurniture from '@/components/customFurniture.vue'
import newsLetter from '@/components/newsLetter.vue'
import featuredproduct from '@/components/featuredProducts.vue'
</script>
<style scoped>
.homeTemplate {
  display: flex;
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;
  margin-left: 200px;
}
.homeTemplate p {
  max-width: 500px;
  font-size: 1.25rem;
}
.homeTemplate h1 {
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: bold;
  max-width: 400px;
}
.HomePic {
  height: 550px;
}
.desc {
  margin-right: 290px;
}
.PersonWork {
  width: 250px;
  display: flex;
  position: absolute;
  transform: translateY(-105%) translateX(-110px);
}
.imagesSrc {
  display: block;
  position: relative;
}
#ShowBtn {
  padding: 0.75rem 1.5rem;
  border-radius: 7px;
  border: none;
  background-color: #ab7a5f;
  color: white;
  font-size: 1.1rem;
  margin-top: 190px;
}
#ShowBtn:hover {
  background-color: #eaded7;
  color: black;
  cursor: pointer;
}
.featured {
  background-color: #f1f5f8;
}
</style>
