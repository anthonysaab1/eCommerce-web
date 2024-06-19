<template>
  <div id="custom-furniture">
    <div>
      <div class="section-services">
        <h3 class="title-custom">Custom Furniture Built Only For You</h3>
        <p class="desc-custom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur
          reprehenderit non aliquam voluptates dolore aut vero consequuntur.
        </p>
      </div>
      <div class="card-services">
        <div class="service">
          <div class="divOfLogo">
            <div class="logo-service">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                />
              </svg>
            </div>
          </div>
          <div class="title-service">
            <h4>Mission</h4>
          </div>
          <div class="description-service">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis
            corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
          </div>
        </div>
        <div class="service">
          <div class="divOfLogo">
            <div class="logo-service">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5l57.4 95.6L63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8L301.5 179.8l57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z"
                />
              </svg>
            </div>
          </div>
          <div class="title-service">
            <h4>Vision</h4>
          </div>
          <div class="description-service">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis
            corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
          </div>
        </div>
        <div class="service">
          <div class="divOfLogo">
            <div class="logo-service">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
            </div>
          </div>
          <div class="title-service">
            <h4>History</h4>
          </div>
          <div class="description-service">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis
            corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.service {
  background-color: #c5a491;
  width: 300px;
  text-align: center;
  border-radius: 5px;
  transform: translateY(40%) translateX(-110px);
}
.divOfLogo {
  width: 4rem;
  height: 4rem;
  display: grid;
  background: #eaded7;
  place-items: center;
  margin: 0px auto 1rem;
  border-radius: 50%;
  color: #453227;
  margin-top: 10px;
}
.title-service {
  color: #453227;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}
.logo-service {
  width: 2em;
  height: 1.5em;
}
#custom-furniture {
  background-color: #eaded7;
}
.card-services {
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-left: 400px;
  margin-top: 50px;
}
.section-services {
  padding-top: 100px;
  padding-left: 100px;
  display: flex;
  flex-direction: row;
  padding-bottom: 0px;
}
.section-services .title-custom {
  margin-left: 200px;
}
.section-services .desc-custom {
  margin-left: 200px;
  max-width: 600px;
}
</style>
