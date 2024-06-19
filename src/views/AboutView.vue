<template>
  <section>
    <div id="About-section">
      <RouterLink :to="{ name: 'home' }"> <h3>Home</h3></RouterLink>
      /
      <h3>About</h3>
    </div>
  </section>
  <div id="sectionAbout">
    <div id="imageAbout">
      <img
        src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"
        alt="AboutPicture"
        id="PicOfAbout"
      />
    </div>
    <div id="desc">
      <h2>Our Story</h2>
      <div id="underline"></div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente
        tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi,
        omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore,
        obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio
        eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum,
        nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex,
        voluptate accusamus nesciunt totam vitae esse iste.
      </p>
    </div>
  </div>
</template>

<style scoped>
#About-section {
  width: 100%;
  height: 20vh;
  background-color: #eaded7;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: #453227;
  font-size: 2rem;
}

#PicOfAbout {
  width: 500px;
  height: 500px;
  border-radius: 5px;
  padding-top: 20px;
}

#sectionAbout {
  padding-top: 40px;
  display: flex;
  gap: 4rem;
  margin-left: 200px;
}
#desc {
  display: flex;
  position: absolute;
  gap: 20px;
  flex-direction: column;
  padding-left: 550px;
  max-width: 1000px;
}
#imageAbout {
  display: inline;
}
#desc p {
  color: #324d67;
}
#desc h2 {
  font-size: 2.5rem;
}
</style>
