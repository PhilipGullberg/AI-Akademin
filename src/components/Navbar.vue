<template>


<nav class="navbar">
    <div class="nav-left">
      <!-- Lägg till din logotyp här -->
      <router-link to="/" class="logo"><img src="../assets/AILogga.png" alt=""></router-link>
    </div>
    <ul v-if="!isMobile" class="nav-links" id="main">
      <router-link to="/" class="nav-links">Hem</router-link>
      <router-link to="/services/" class="nav-links">Våra tjänster</router-link>
      <router-link to="/contact/" class="nav-links">Kontakt</router-link>
      
      <!-- Lägg till fler länkar för dina sektioner här -->
    </ul>
    <div v-else>

        <div class="hamburger-button" @click="toggleMobileMenu" >
            <img class="hamburger" src="../assets/hamburger.png" alt="">
        </div>
        <div class="mobile-nav" v-if="showMobileMenu" >
            <div class="hamburger-button-close" @click="toggleMobileMenu" >
                <img class="hamburger" src="../assets/close.png" alt="">
            </div>
            <ul class="nav-links">
            <router-link to="/" class="nav-links" @click="toggleMobileMenu" >Hem</router-link>
            <router-link to="/services/" class="nav-links" @click="toggleMobileMenu" >Våra tjänster</router-link>
            <router-link to="/contact/" class="nav-links" @click="toggleMobileMenu" >Kontakt</router-link>
          
            <!-- Lägg till fler länkar för dina sektioner här -->
            </ul>
        </div>
    </div>
    <div v-if="!isMobile" class="cta-right">
      <router-link to="/contact/" > <button class="cta-button">Boka nu</button></router-link>
    </div>
  </nav>
  </template>

<script>
export default {


    name: 'Navbar',
    data(){
        return{
            isMobile:false,
            showMobileMenu:false,

        }
    },
    methods:{

        checkScreenWidth() {
            this.isMobile = window.innerWidth <= 800;
          
        },
        toggleMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        }
      
    },
    mounted() {
        window.addEventListener('resize', this.checkScreenWidth);
     
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenWidth);
    }
   
};
</script>
<style scoped>
.hamburger{
    width:30px;
}
.hamburger-button-close{
    display: flex;
    justify-content: end;
    margin-top:2rem;
    margin-right:2rem;
}

.mobile-nav {
  position: absolute;
  
  top: 0px;
  left: 0;
  z-index:5;
  height:50vh;
  width: 100%;
  background-color: #fff;
  transition: all 0.2s;
}
.mobile-nav .nav-links{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    gap:40px;
    margin-top:1rem;
}

@keyframes fadeUpAnim{
    0% {
        opacity: 0;
        transform: translateY(-100px);
        
    }
    100% {
        opacity: 1;
        transform: translateX(0);
     }
}
.navbar {
  animation: fadeUpAnim 0.6s ease-out;
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
  gap:6px;
  display: flex;
  justify-content: center;
}

.nav-links{
  margin: 0 10px;
}

.nav-links{
  color: black;
  text-decoration: none;
  position: relative;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.nav-links:hover {
  color: #52533a;
  
}
.nav-links a:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 2px;
  width: 0;
  background: transparent;
}

.nav-links a:after {
  transition: width .25s ease, background-color .25s ease, left .25s ease;
}

.nav-links a:hover:after {
  width: 100%;
  left: 0;
  background: #888B61;
}

.cta-right {
  flex: 1;
  text-align: right;
  justify-content: end;
  
}
.cta-right button {
  padding: 8px 12px;
  background-color: transparent;
  color:  rgb(0, 0, 0);
  border: 2px solid #B8AD8B;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 16%), 0 4px 5px 0 rgb(0 0 0 / 11%), 0 1px 10px 0 rgb(0 0 0 / 10%);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-right button:hover {
  background-color: #B8AD8B;
  color:White;
}

.logo img {
  width: 100px;
}
@media (max-width: 800px) {
  .nav-links#main{
    display:none;
  }
 
}
</style>