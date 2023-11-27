<template>
     <div id="about-us" class="about-us-page">
        <div class="content">
            
          <div class="left-section">
             
            
             <div>
               <img class="image" src="../assets/AILogga.png" alt="Team Photo">

               <CustomButton route="/contact/" buttonText="Kontakta oss"/>
               </div>
               
            </div>
            
          <div class="right-section">
            <div>
                <h1>Om oss</h1>
                <p>
                  Vi på AI-Akademin brinner för att göra AI-utbildning tillgänglig och engagerande för alla. </p>
                  <p>Med en bakgrund inom datateknik och pedagogik strävar vi efter att erbjuda workshops och föreläsningar som kombinerar teknisk expertis med en lärorik upplevelse.
                </p>
                <br>
                <p>
                  Vår erfarenhet sträcker sig från att leda AI-utvecklingen på NTI-Gymnasiet till att skräddarsy kurser för olika företag. Vi tror på att öppna dörrar till AI-världen och skapa en lärandeupplevelse som är både informativ och inspirerande, och få er att börja använda AI praktiskt i ert arbetsliv.
                </p>
                <br>
                
          
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import CustomButton from '../components/CTA-button.vue';
export default {
    name: 'AboutUsPage',
    components:{CustomButton},
};
</script>
<style scoped>
.about-us-page {
  margin-top:5rem;
  padding: 20px 0;
  display: flex;
  font-size:1.1rem;
  justify-content: center;
  align-items: center;
   color:black;
   margin-bottom: 4rem;
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
.left-section img{
    width:80%;
    border-radius: 8px;

}
.left-section div{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:10px;
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
}
.image{
  
  background-color: white;
}
.left-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left:3rem;
}

.right-section {
  position: relative;
  overflow: hidden;
  display:flex;
  justify-content: center;
}
.right-section p{
  margin-top: 1rem;
}

img.imageProfile {
  width:50%;
}
@media (max-width: 800px) {
  .about-us-page{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left-section{
    align-items: center;
    justify-content: center;
    margin-left:0rem;
  }
  .content{
    grid-template-columns: 1fr;
    width:100%;
  }
  .right-section{
    width:100%;
    padding-left:2rem;
    padding-right: 2rem;
  }
}



</style>