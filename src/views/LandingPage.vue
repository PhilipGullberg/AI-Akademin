
<template>
    <div class="landing-page">
        <div class="content">
          <div class="left-section">
            <h1>Lär dig AI: Interaktivt & Engagerande</h1>
            <p>Upptäck potentialen med AI genom våra interaktiva workshops och föreläsningar. Skräddarsydda för företag och skolor, oavsett kunskapsnivå.</p>
            <div class="cta-buttons">
              <button class="cta-button">Boka nu</button>
              <button class="cta-button">Intro-video (30s)</button>
            </div>
          </div>
          <div class="right-section">
            <img src="../assets/BannerImage.jpg" alt="Relevant Bild">
          </div>
        </div>
      </div>
    <AboutUs />
    <ServicePage />
    <ToolsMethods />
    <BannerCTA />
</template>
<script>

// OR use this one if you are on Vue 3
import AboutUs from '../components/AboutUs.vue';
import ServicePage from "../components/ServicePage.vue";
import ToolsMethods from "../components/ToolsMethods.vue"
import BannerCTA from '../components/BannerCTA.vue';


export default {
    components: { AboutUs, ServicePage,ToolsMethods, BannerCTA},
    data: () => ({
        canShowContent: false,
        content: null,
        apiKey: '67d956f840924bacbfde9ef3cf161bde',
    }),
    mounted() {
        getContent({
            model: 'landing-page',
            apiKey: '67d956f840924bacbfde9ef3cf161bde',
            userAttributes: {
                urlPath: window.location.pathname,
            },
        }).then(res => {
            this.content = res;
            this.canShowContent = this.content || isPreviewing();
        });
    },
}
</script>
<style scoped>
.landing-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin-top:3rem;
  width: 100%;
}

.left-section {
  width: 100%;
  padding: 20px;
}

.right-section {
  width: 80%;
  display: flex;
  justify-content: center;
}

img {
  width: 70%;
  height: auto;
  border-radius: 7px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.cta-buttons {
  display: flex;
  gap: 10px;
}

.cta-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #0056b3;
}

</style>