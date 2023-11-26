<template>
    <Navbar />
    <div class="services-page">
        <!-- Första delen -->
        <div class="intro">
            <h1>Våra tjänster</h1>
            <p>Vi erbjuder flera olika typer av tjänster, i olika längd och innehåll. Alla våra tjänster går att få antingen på plats i stockholmsområdet eller på distans vart som i Sverige. Med över 100 timmar research har vi lagt upp väl genomtänkta föreläsningar och workshops som vi garanterar kommer skapa intresse och ge praktisk nytta i ert arbete.</p>
        </div>
    

    <svg id="clouds" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M-5 100 Q 0 20 5 100 Z
         M0 100 Q 5 0 10 100
         M5 100 Q 10 30 15 100
         M10 100 Q 15 10 20 100
         M15 100 Q 20 30 25 100
         M20 100 Q 25 -10 30 100
         M25 100 Q 30 10 35 100
         M30 100 Q 35 30 40 100
         M35 100 Q 40 10 45 100
         M40 100 Q 45 50 50 100
         M45 100 Q 50 20 55 100
         M50 100 Q 55 40 60 100
         M55 100 Q 60 60 65 100
         M60 100 Q 65 50 70 100
         M65 100 Q 70 20 75 100
         M70 100 Q 75 45 80 100
         M75 100 Q 80 30 85 100
         M80 100 Q 85 20 90 100
         M85 100 Q 90 50 95 100
         M90 100 Q 95 25 100 100
         M95 100 Q 100 15 105 100 Z"></path>
    </svg>
    <div class="background" id="one">
        <div class="section">
            <div class="section-info">
                <h1>AI Workshops</h1>
                <p>
                    Utforska, skapa och lära dig om AI på ett engagerande sätt. Våra workshops är skräddarsydda för att passa alla nivåer.
                    Få en detaljerad förståelse för AI:ens olika områden och verktyg.
                    Jobba praktiskt med verktygen och lär dig använda AI till din fördel i arbetslivet.
                </p>
                <router-link to="/contact/" class="nav-links"><button class="cta-button" id="white">Boka nu</button></router-link>
            </div>
            <div class="section-image">
                <img src="../assets/WorkshopAI.jpeg" alt="Workshop Image">
            </div>
        </div>

        <!-- Kort för varje sektion -->
        <div class="cards">
            <!-- Innehåll -->
            <div class="card">
                <div class="icon-text">
                    <img width="30px" src="../assets/sheet.png" alt="">
                    <h2>Innehåll</h2>
                    
                </div>
                
                <ul>
                    <li>Utforska olika AI-verktyg inom text, bild, ljud, video.</li>
                     <li>Lär er utnyttja ChatGPT:s fulla potential</li>
                     <li>Lär er effektivisera era arbetsuppgifter</li>
                     <li>Anpassad efter era behov och förfrågningar.</li>
                </ul>
                   
            </div>
            <!-- Varför workshop -->
            <div class="card">
                <div class="icon-text">
                <img width="30px" src="../assets/workshop.png" alt="">
                <h2>Varför workshop</h2>
                 </div>
                <ul>
                    <li>Arbeta praktiskt med verktygen på riktigt</li>
                     <li>Pedagogiskt och effektivt sätt att komma igång</li>
                      <li>Gå från teori till praktik</li>
                </ul>
            </div>
            <!-- Efter workshopen -->
            <div class="card">
                <div class="icon-text">
                    <img width="30px" src="../assets/work-from-home.png" alt="">
                    <h2>Efter workshopen</h2>
                </div>
                <ul>
                    <li>Lärt er använda chatGPT effektivt</li>
                    <li>Lärt er utnyttja AI:s potential i arbetslivet</li>
                    <li>Lärt er vad AI faktiskt är och vilka för och nackdelar det finns</li>
                </ul>
            </div>
        </div>
        <svg id="clouds2" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M-5 100 Q 0 20 5 100 Z
         M0 100 Q 5 0 10 100
         M5 100 Q 10 30 15 100
         M10 100 Q 15 10 20 100
         M15 100 Q 20 30 25 100
         M20 100 Q 25 -10 30 100
         M25 100 Q 30 10 35 100
         M30 100 Q 35 30 40 100
         M35 100 Q 40 10 45 100
         M40 100 Q 45 50 50 100
         M45 100 Q 50 20 55 100
         M50 100 Q 55 40 60 100
         M55 100 Q 60 60 65 100
         M60 100 Q 65 50 70 100
         M65 100 Q 70 20 75 100
         M70 100 Q 75 45 80 100
         M75 100 Q 80 30 85 100
         M80 100 Q 85 20 90 100
         M85 100 Q 90 50 95 100
         M90 100 Q 95 25 100 100
         M95 100 Q 100 15 105 100 Z"></path>
            </svg>
        </div>
      
        
         <div class="background" id="two">
  
        <div class="section" >
                <div class="section-info">
                    <h1>AI Föreläsningar</h1>
                    <p>
                       Få en rejäl introduktion och inspiration om AI, förstå vad hypen är och vad en AI faktiskt är för något. Välj mellan en kortare version eller en längre version, vi anpassar alla föreläsningar efter tidigare förkunskaper och teknisk bakgrund. Vi hjälper er förstå AI:s påverkan på samhället, hur olika AI fungerar och ger en inblick i framtiden med AI. Vi diskuterar fördelar och nackdelar. Se till att hänga med i utvecklingen.
                    </p>
                    <router-link to="/contact/" class="nav-links"><button class="cta-button">Boka nu</button></router-link>
                </div>
                <div class="section-image">
                    <img src="../assets/Lecture.jpg" alt="Workshop Image">
                </div>
            </div>

            <!-- Kort för varje sektion -->
            <div class="cards">
                <!-- Innehåll -->
                <div class="card">
                    <div class="icon-text">
                        <img width="30px" src="../assets/sheet.png" alt="">
                        <h2>Innehåll</h2>
                    </div>
                   <ul>
                    <li>En introduktion och fördjupning i AI</li>
                    <li>Förstå vad AI är och hur AI fungerar</li>
                    <li>Fördelar och nackdelar med AI</li>
                    <li>Framtidsspaning och samhällspåverkan</li>
                    <li>Anpassad efter ert intresse och behov</li>
                   </ul>
                </div>
                <!-- Varför workshop -->
                <div class="card">
                    <div class="icon-text">
                        <img width="30px" src="../assets/lecture.png" alt="">
                    <h2>Varför föreläsning</h2>
                    </div>
                    <ul>
                        <li>Häng med i utvecklingen</li>
                        <li>Förstå vad AI är och hur AI fungerar</li>
                        <li>Ta del av hur er organisation kan använda AI</li>
                        <li>Anpassad efter ert intresse och behov</li>
                       </ul>
                </div>
                <!-- Efter workshopen -->
                <div class="card">
                    <div class="icon-text">
                        <img width="30px" src="../assets/work-from-home.png" alt="">
                        <h2>Efter föreläsningen</h2>
                    </div>
                   <ul>
                        <li>Ni kommer förstå hur AI fungerar</li>
                        <li>Ha en plan för hur ni kan använda AI</li>
                        <li>Bli inspirerade och vilja ha mer</li>
                        <li>Förstå hur er organisation kommer passa in i framtiden</li>
                        
                       </ul>
                </div>
            </div>
            </div>
            <svg id="clouds" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M-5 100 Q 0 20 5 100 Z
                 M0 100 Q 5 0 10 100
                 M5 100 Q 10 30 15 100
                 M10 100 Q 15 10 20 100
                 M15 100 Q 20 30 25 100
                 M20 100 Q 25 -10 30 100
                 M25 100 Q 30 10 35 100
                 M30 100 Q 35 30 40 100
                 M35 100 Q 40 10 45 100
                 M40 100 Q 45 50 50 100
                 M45 100 Q 50 20 55 100
                 M50 100 Q 55 40 60 100
                 M55 100 Q 60 60 65 100
                 M60 100 Q 65 50 70 100
                 M65 100 Q 70 20 75 100
                 M70 100 Q 75 45 80 100
                 M75 100 Q 80 30 85 100
                 M80 100 Q 85 20 90 100
                 M85 100 Q 90 50 95 100
                 M90 100 Q 95 25 100 100
                 M95 100 Q 100 15 105 100 Z"></path>
            </svg>
            <div class="background" id="three">
            <div class="section">
                <div class="section-info">
                    
                        <h1>AI Föreläsning + Workshop</h1>
                        
              
                    
                    <p>
                        Den perfekta blandningen mellan teori och praktik. Bli inspirerade och förstå hur AI fungerar och gå sedan över och testa på själva. Vi anpassar innehållet till er organisation och bygger tillsammans fram idéer praktiska användningsområden att använda AI. Börja effektivisera ert arbete med AI nu!
                    </p>
                   
                    <router-link to="/contact/" class="nav-links">  <button class="cta-button" id="white">Boka nu</button></router-link>
                </div>
                <div class="section-image">
                    <img src="../assets/Combined.jpg" alt="Workshop Image">
                </div>
            </div>

            <!-- Kort för varje sektion -->
            <div class="cards">
                <!-- Innehåll -->
                <div class="card">
                    <div class="icon-text">
                        <img width="30px" src="../assets/sheet.png" alt="">
                        <h2>Innehåll</h2>
                        </div>
                    <ul>
                        <li>En introduktion och fördjupning i AI</li>
                        <li>Förstå vad AI är och hur AI fungerar</li>
                        <li>Fördelar och nackdelar med AI</li>
                        <li>Lär er praktiskt använda AI på ett effektivt sätt</li>
                        <li>Bemästra verktyg som chatGPT för att underlätta era arbetsuppgifter</li>
                       </ul>
                </div>
                <!-- Varför workshop -->
                <div class="card">
                    <div class="icon-text">
                        <img width="30px" src="../assets/workshop.png" alt="">
                        <h2>Varför kombinationen</h2>
                    </div>
                    <ul>
                        <li>Perfekt blanding mellan teori och praktik</li>
                        <li>Lär er både hur AI fungerar och hur man använder det</li>
                        <li>Förståelse på djupet</li>
                        <li>Öka det praktiska användandet på arbetsplatsen</li>
                        <li>Anpassad efter ert intresse och behov</li>
                       </ul>
                </div>
                <!-- Efter workshopen -->
                <div class="card">
                    <div class="icon-text">
                        <img width="30px" src="../assets/work-from-home.png" alt="">
                        <h2>Efteråt</h2>
                    </div>
                    <ul>
                        <li>Kommer ni veta vad AI är</li>
                        <li>Ni kommer förstå hur AI fungerar</li>
                        <li>Veta hur ni ska använda AI på ert företag</li>
                        <li>Vara inspirerade och redo att ta er an framtiden</li>
                       </ul>
                </div>
            </div>
            </div>
        <!-- Upprepa denna struktur för varje del -->
    </div>
</template>

<script>
import CustomButton from '../components/CTA-button.vue';
export default {
    components: {CustomButton}
    
};
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
#bigHalfCircle path {
	fill: #515338;
	stroke: darken(#515338, 7%);
}
.background{
    background-color: #515338;
    
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.icon-text{
    display:flex;
    align-items: center;
    gap:12px;
    margin-bottom:1rem;
}
.background .section{
    color:white;
}
.background#two .section{
    color:black;
}
.background#two{
    background-color: white;
    color:black;
}

.section-info p{
    margin-top:1rem;
    line-height: 2;
  
    
}
/* Stil för den övergripande layouten */
#clouds path {
	fill: #515338;
	stroke: #515338;
}
.clouds {
  background: #515338;
}
#clouds2 path{
    fill:white;
    stroke: white;
}



.cta-button {
    margin-top:2rem;
    width:40%;
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


.cta-button#white{
    background-color: white;
    color:black;
}


.cta-button#white:hover {
    background-color: #B8AD8B;
  color:White;
}
.solid{
    border:1px solid black;
    width:100%;
}
.intro{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:0% 20rem 0% 20rem;
    margin-top: 3rem;
    margin-bottom: 5rem;
    animation: fadeInAnimation 0.4s ease-out;    
    line-height: 2;
}
.intro p{
    padding-top: 1rem;
}
.services-page {
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    


    
    /* Justera avståndet mellan sektionerna */
    /* Mer stil för sidan */
}
ul {
  list-style: none;
  padding: 0.7rem;
  margin: 0;
}

/* Styla listpunkterna */
ul li {
  padding-left: 20px; /* Lägg till vänsterindrag för att skilja punkterna från kanten */
  position: relative;
    font-size: 16px;
    line-height: 1.6;
  margin-bottom: 10px; /* Avstånd mellan varje punkt */
}
ul li::before {
  content: "•"; /* Eller använd en ikon med 'content: url('path/to/icon.png')' */
  color: #333; /* Färg på punkterna */
  position: absolute;
  left: 0;
}
.section {
    display: flex;
    
    padding:1rem;
    justify-content: center;
    flex-wrap: wrap;

    /* Stilar för sektionens layout */
}


.section-info {

    padding-right: 5rem;
    width:45%;
    
    /* Justera mellanrummet mellan text och bild */
    /* Stilar för sektionens text */
}

.section-image img {
    width: 400px;
    /* Justera bildens storlek */
    height: auto;
    border-radius: 10px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    /* Stilar för sektionens bild */
}

.cards {
    display: flex;
    flex-wrap: wrap;
    width:75%;
    gap:1rem;
    justify-content: space-around;
    /* Mer stil för kortsektionen */
    margin-top:1rem;
    margin-bottom: 5rem;
}


.card {
    flex: 1;
    background-color: rgba(255, 255, 255, 0.925);
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.356);
    /* Stilar för korten */
}
@media screen and (max-width: 768px) {
  .section {
    flex-direction: column; /* Ändrar till en kolumnlayout för mindre skärmar */
    padding: 0; /* Tar bort paddings för att optimera för mindre skärmar */
  }
  .intro{
    animation: fadeInAnimation 0.4s ease-out;
    margin-top: 1rem;
    padding:2rem;
  }

  .section-info,
  .section-image {
    width: 100%; /* Full bredd för att passa mindre skärmar */
    padding: 0 1rem; /* Lägger till lite sidomarginal */
    text-align: center; /* Centrerar texten för mindre skärmar */
    margin-bottom: 1rem;
    
  }

  .section-image img {
    width: 50%; /* Full bredd för bilder på mindre skärmar */
    border-radius: 10px;
}
.section-info h1{
    font-weight: bold;
}

  .cards {
    width: 100%; /* Full bredd för kortsektionen på mindre skärmar */
    padding: 0; /* Tar bort paddings för att optimera för mindre skärmar */
  }

  .card {
    width: 100%; /* Full bredd för kort på mindre skärmar */
    margin-bottom: 1rem; /* Lägger till lite avstånd mellan korten */
  }
}
</style>
