<template>
    <div id="tools-methods" class="tools-and-methods">
        <div class="tools-info">
            <h2>Våra Verktyg </h2>
            <p>Vi undervisar med de senaste AI-verktygen för att ge en hands-on erfarenhet inom text, bild, ljud och video.
                Några av våra verktyg inkluderar:</p>
        <div class="card-container">
            <div class="card card-3">
                <h3>Text - ChatGPT</h3>
                <p>Ett fantastiskt verktyg som kan effektivisera många arbetsuppgifter.</p>
            </div>
            <div class="card card-1">
                <h3>Bild - Dall-E / Firefly</h3>
                <p>Lär dig skapa AI-bilder och ge rätt prompts för att få bättre resultat.</p>
            </div>
            <div class="card card-2">
                <h3>Ljud - Elevenlabs</h3>
                <p>Lär dig om hur AI kan användas för att skapa text-till-tal eller ändra röst.</p>
            </div>
        <div class="card card-4">
            <h3>Video - Heygen </h3>
            <p>Lär dig skapa en AI-avatar av dig själv.</p>
        </div>
        </div>

        </div>
        <div class="methods-info">
            <h3>Vår Metodik</h3>
            <p>Vår undervisningsmetodik är fokuserad på en kombination av praktiska övningar och teoretisk kunskap. Vi
                strävar efter att skapa en interaktiv och engagerande inlärningsmiljö där varje individ får hands-on
                erfarenhet med verktygen.</p>
            <p>Vi vill ta er från inspiration till att faktiskt praktiskt börja använda AI i ert dagliga arbete.</p>
                <ul class="lista">
                    <li>
                        Förstå hur AI faktiskt fungerar
                    </li>
                    <li>
                        Från teori till praktik
                    </li>
                    <li>
                        Arbetsuppgifter som AI passar att användas till
                    </li>
                    <li>
                        Blir proffs på att prompta AI för bästa resultat
                    </li>
                </ul>
                <img class="rocketIMG" width="150px" src="../assets/RocketShip.png" alt="">
        </div>
    </div>
</template>
<style scoped>
.tools-and-methods {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1300px;
  margin: 0 auto;
  margin-bottom:5rem;
  gap:40px;
}
.rocketIMG{
   padding-top:2rem;
   margin:auto;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
}

.card {
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow: hidden;
  transition: all 0.2s ease-out;
  color:white;
   
 
   
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}
.card-1 {
  background-image: url('https://as1.ftcdn.net/v2/jpg/05/60/84/54/1000_F_560845482_ftV20Kd2f4Dw1TJ7EUPF8H5zg3D7TiLE.jpg'); /* Lägg till sökvägen för varje bakgrundsbild här */
    background-size: cover;
}

.card-2 {
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkIbAqBPxqtNwyeTanCktI6LuIvQg9oCg_6w&usqp=CAU'); /* Lägg till sökvägen för varje bakgrundsbild här */
    background-size: cover;
   
}

.card-3 {
  background-image: url('https://duet-cdn.vox-cdn.com/thumbor/0x0:1820x1213/2400x1600/filters:focal(910x607:911x608):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24247717/lp_logo_3.0.jpg');
  background-size: cover; 
  
}

.card-4 {
  background-image: url('https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2023-02/brain-artificial-intelligence-ai-video-generator.png'); /* Lägg till sökvägen för varje bakgrundsbild här */
    background-size: cover;
     

}
.card:before {
  content: '';
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
 
  bottom: -20px;
  background-image: inherit;
  background-size: cover;
   -webkit-filter: blur(4px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(10px) brightness(80%); /* Justera suddighetsgraden efter behov */
box-shadow: 1px 1px 3px 3px black;
}
.card h3{
    position: relative;
    font-weight: bold;
}
.card p {
    position: relative;
  font-size: 1rem;
  font-weight: medium;
  line-height: 1.6;
  z-index: 1;
}
.card:hover{
    transform: scale(1.1);
    z-index:10;
}
/* Återställ standardmarginaler och indrag på listan */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Styla listpunkterna */
ul li {
  padding-left: 20px; /* Lägg till vänsterindrag för att skilja punkterna från kanten */
  position: relative;
  margin-bottom: 8px; /* Avstånd mellan varje punkt */
}

/* Lägg till punkter eller ikoner till listan */
ul li::before {
  content: "•"; /* Eller använd en ikon med 'content: url('path/to/icon.png')' */
  color: #333; /* Färg på punkterna */
  position: absolute;
  left: 0;
}

/* Styla länkar inuti listan */
ul li a {
  text-decoration: none;
  color: #007bff; /* Färg på länkarna */
  transition: color 0.3s ease; /* Gör övergången av färg mjuk */
}

ul li a:hover {
  color: #0056b3; /* Färg vid hover */
}

.tools-info,
.methods-info {
    display:flex;
    flex-direction: column;
  flex: 1;
  padding: 20px;
  
}

.tools-info h2,
.methods-info h3 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.tools-info p,
.methods-info p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}


.methods-info {
  background-color: #f7f7f7;
  border-radius: 8px;
}
</style>
<script>
export default {
    name: 'ToolsAndMethods'
};
</script>
