<template>
    <div class="background">

   
    <div class="title"><h1>Vad vi erbjuder </h1></div>
    
    <div id="services" class="services">

        
        <div class="service-card">
            <div class="service-image">
                <img src="https://www.eschoolnews.com/files/2023/07/arts-education-STEAM.jpeg" alt="Workshops">
            </div>
            <div class="service-info">
                <h2>Workshops</h2>
                <p>Interaktiva AI-workshops skräddarsydda för företag och skolor.</p>
                <router-link :to="{ name: 'services' }"  ><button class="cta-button">Läs Mer</button></router-link>
            </div>
        </div>
        <div class="service-card">
            <div class="service-image">
                <img src="../assets/Lecture.jpg" alt="Föreläsningar">
            </div>
            <div class="service-info">
                <h2>Föreläsningar</h2>
                <p>Engagerande föreläsningar om AI för att inspirera och informera.</p>
                <router-link :to="{ name: 'services' }"  ><button class="cta-button">Läs mer</button></router-link>
            </div>
        </div>
        <div class="service-card">
            <div class="service-image">
                <img src="../assets/Combined.jpg" alt="Kombinerade Sessioner">
            </div>
            <div class="service-info">
                <h2>Kombinaton</h2>
                <p>En mix av workshops och föreläsningar för djupare förståelse.</p>
                <router-link :to="{ name: 'services' }"  ><button class="cta-button">Läs mer</button></router-link>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { RouterLink } from 'vue-router'
    export default {
        name: 'Services',
    data() {
    return {
        services: [
    {
        title: 'Workshops',
    description: 'Interaktiva AI-workshops skräddarsydda för företag och skolor.',
    image: 'https://www.eschoolnews.com/files/2023/07/arts-education-STEAM.jpeg', // Lägg till din bildurl här
    ctaText: 'Läs Mer'
        },
    {
        title: 'Föreläsningar',
    description: 'Engagerande föreläsningar om AI för att inspirera och informera.',
    image: "../src/assets/Lecture.jpg", // Lägg till din bildurl här
    ctaText: 'Utforska'
        },
    {
        title: 'Kombinerade Sessioner',
    description: 'En mix av workshops och föreläsningar för djupare förståelse.',
    image: '../src/assets/Combined.jpg', // Lägg till din bildurl här
    ctaText: 'Boka Nu'
        }
    ]
    };
  }
};
</script>
<style scoped>
.background{
    background-color: #515338;
    padding:0.5rem;
    margin-bottom:3rem;
    
}

.services {
  display: flex;
  justify-content: center;
  gap: 50px;
 
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 7rem;
  margin-top: 3rem;
}
.title{
    text-align: center;
    margin-top: 4rem;
    padding:10px;
    color:white;
}

.service-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 300px;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.service-info {
  padding: 20px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.cta-button {
  padding: 10px 20px;
  background-color:#B8AD8B;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #8D8362;
}

</style>