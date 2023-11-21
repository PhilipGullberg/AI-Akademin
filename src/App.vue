<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <div class="nav-left">
      <!-- Lägg till din logotyp här -->
      <router-link to="/AI-Akademin/" class="logo"><img src="../src/assets/LogoNew.png" alt=""></router-link>
    </div>
    <ul class="nav-links">
      <li><a href="#services">Tjänster</a></li>
      <li><a href="#tools-methods">Verktyg & Metoder</a></li>
      <li><a href="#about-us">Om oss</a></li>
      <li><a href="#contact">Kontakt</a></li>
      <!-- Lägg till fler länkar för dina sektioner här -->
    </ul>
    <div class="cta-right">
      <button class="cta-button">Boka nu</button>
    </div>
  </nav>


  <RouterView />
</template>

<style scoped>
.navbar {
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-left {
  flex: 1;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.nav-links li {
  margin: 0 10px;
}

.nav-links li a {
  color: black;
  text-decoration: none;
  font-size: 0.8rem;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #007bff;
}

.cta-right {
  flex: 1;
  text-align: right;

}

.cta-right button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  box-shadow: 1px 1px 1px 1px #0000005c;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-right button:hover {
  background-color: #0056b3;
}

.logo img {
  width: 200px;
}
@media (max-width: 800px) {
  .nav-links{
    display:none;
  }
}
</style>
