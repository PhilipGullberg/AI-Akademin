<template>
    <div id="contact" class="banner-cta" :style="{ backgroundColor: bgColor }">
        <div class="content">
            <div class="avatar">
                <img src="../assets/Philip.jpg" alt="Avatar">
            </div>
            <div class="text">
                <h2>{{ title }}</h2>
                <p>Vi tar gärna emot förfrågningar och tankar ni har, så tveka inte att höra av er</p>
                <router-link to="/contact/" class="nav-links"><button class="cta-button">Kontakta oss</button></router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
.banner-cta {
  width: 100%;
  padding: 50px 0;
  text-align: center;
  background-color: #515338;
  color: #fff;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar img {
  width: 200px;
  height: 250px;
  border-radius: 8px;
  margin-right: 5rem;
}

.text {
  text-align: left;
  
}
.text p{
    margin-bottom:1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.cta-button {
  padding: 15px 30px;
  background-color: #8D8362;
  color: #fff;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.25);
  border: 1px black solid;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}
.cta-button a{
    text-decoration: none;
    color:white;
}

.cta-button:hover {
  background-color: #888B61;
}
@media (max-width: 800px) {
  h2{
    font-size: 2rem;
  }
  .content{
    padding:2rem;
    padding-bottom: 3rem;
  }
  .avatar img{
    display: none;
  }
}
</style>

<script>
export default {
    name: 'BannerCTA',
    props: {
        bgColor: {
            type: String,
            default: '#515338;'
        },
        avatarImg: {
            type: String,
            default: '../src/assets/Philip.jpg' // Byt ut med din avatarbildens URL
        },
        title: {
            type: String,
            default: 'Hör av dig till oss om du vill veta mer'
        },
        ctaText: {
            type: String,
            default: 'philip_gullberg@hotmail.com'
        }
    }
};
</script>
