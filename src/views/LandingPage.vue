
<template>
  <Navbar />
    <div class="landing-page">
        <div class="content">
          <div class="left-section">
            <h1>Lär dig AI: Interaktivt & Engagerande</h1>
            <p>Upptäck potentialen med AI genom våra interaktiva workshops och föreläsningar. Skräddarsydda för företag och skolor, oavsett kunskapsnivå.</p>
            <div class="cta-buttons">
              <CustomButton route="/contact/" buttonText="Boka nu"/>
              <button class="cta-button">Intro-video (30s)</button>
            </div>
          </div>
          <div class="right-section">
            <img src="../assets/AI-Akademin.png" alt="Relevant Bild">
          </div>
        </div>
      </div>
    <Divider />
    <WhyLearn />
    <AboutUs />
    <Divider />
    <ServicePage />
    <ToolsMethods />
    <BannerCTA />
</template>
<script>
import AboutUs from '../components/AboutUs.vue';
import ServicePage from "../components/ServicePage.vue";
import ToolsMethods from "../components/ToolsMethods.vue"
import BannerCTA from '../components/BannerCTA.vue';
import WhyLearn from '../components/WhyLearn.vue';
import Divider from "../components/DividerPage.vue";
import CustomButton from '../components/CTA-button.vue';

export default {
    components: { AboutUs, ServicePage,ToolsMethods, BannerCTA, WhyLearn,Divider,CustomButton},
}
</script>
<style scoped>
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
        transform: translateX(-200px);
        
    }
    100% {
        opacity: 1;
        transform: translateX(0);
     }
}

.landing-page {
  display: flex;
  animation: fadeInAnimation 0.4s ease-out;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;
  
}

.content {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin-top:1rem;
  width: 100%;
}

.left-section {
  width: 90%;
  padding: 20px;
  margin-left: 5rem;
  
}
.left-section p{
  line-height:2;
}

.right-section {
  width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  width: 80%;
  height: auto;
  border-radius: 7px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.cta-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
  
}

.cta-button {
  padding: 10px 20px;
  background-color: transparent;
  color:  rgb(0, 0, 0);
  border: 2px solid #B8AD8B;
  font-size:0.9rem;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 16%), 0 4px 5px 0 rgb(0 0 0 / 11%), 0 1px 10px 0 rgb(0 0 0 / 10%);
  transition: background-color 0.3s   ease;
}

.cta-button:hover {
  background-color: #B8AD8B;
  color:White;

}
@media only screen and (max-width: 768px) {
  .content {
    width: 100%;
    align-items: center;
    justify-content: center;

  
  }
  .cta-button{
    margin:1.2rem;
    background-color: white;


  }
  .cta-button:hover {
  background-color: #B8AD8B;
  color:White;

}
  .right-section {
    display: none; /* Göm bilden i mobilvy */
  }

  .left-section {
    text-align: center;
    position: relative;
    padding: 20px;
    margin:0;
    width:100%;
    padding-top:3rem;
    padding-bottom: 3rem;
   
  }

  .left-section::before {
    content: "";
    background-image: url('../assets/AI-Akademin.png');
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.45);
    bottom: 0;
    filter: blur(5px) brightness(25%); /* Lägg till suddighet efter behov */
    z-index: -1;

  }
h1{
    font-size: 2rem;
}
  h1,
  p,
   .cta-buttons {
    position: relative;
    z-index: 1;
    color: white;
    
    justify-content: center; /* Justera färg efter behov */
  }
 
}

</style>