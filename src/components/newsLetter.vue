<template>
  <div class="newsLetter">
    <h3>Join our newsletter and get 20% off</h3>
    <div class="newsLetter-join">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione
        soluta veniam provident adipisci cumque eveniet tempore?
      </p>
      <div><input /><button id="sub-btn">Subscribe</button></div>
    </div>
  </div>
</template>
<style scoped>
.newsLetter-join {
  display: flex;
  flex-direction: row;
}
.newsLetter-join p {
  max-width: 400px;
  margin-right: 330px;
  margin-bottom: 50px;
}
.newsLetter h3 {
  font-size: 1.5rem;
  font-weight: bold;
}
.newsLetter {
  margin-top: 150px;
  padding-left: 200px;
}
#sub-btn {
  background-color: #ab7a5f;
  border: #ab7a5f;
  cursor: pointer;
}
</style>
