<template>
     <div id="about-us" class="about-us-page">
        <div class="content">
            
          <div class="left-section">
             
             <img src="../assets/Philip.jpg" alt="Team Photo">
            </div>
          <div class="right-section">
            <div>
                <h1>Om oss</h1>
                <p>
                  Vi på AI-kunskap brinner för att göra AI-utbildning tillgänglig och engagerande för alla. </p>
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

export default {
    name: 'AboutUsPage'
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
  background: rgb(240,247,255);
background: linear-gradient(166deg, rgb(88, 165, 253) 0%, rgb(46, 145, 250) 38%, rgba(0,123,255,1) 97%, rgb(12, 129, 254) 100%);
  color:white;
}
.left-section img{
    width:50%;
    border-radius: 8px;
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1200px;
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



</style>