<template>
    <div class="why-learn-ai">
      <div class="content">
        <div class="card">
            <div class="image-section">
              <img src="https://aiakademin.io/wp-content/uploads/2023/10/AI-6.png" alt="Why Learn AI">
            </div>
            <div class="text-section">
              <h2>Varför lära sig om giAI?</h2>
              <p>Utforska potentialen med artificiell intelligens och dess påverkan på framtiden. Lär dig hur AI kan förändra branscher och samhällen.</p>
            </div>
        </div>
        <div class="card">
            <div class="image-section">
                  <img src="https://aiakademin.io/wp-content/uploads/2023/10/AI-3.png" alt="Why Learn AI">
            </div>
            <div class="text-section">
                <h2>Börja utnyttja AI praktiskt i ditt arbetsliv</h2>
                <p>Lär dig hur du kan effektivisera dina arbetsuppgifter och förbättra dem genom att använda AI</p>
            </div>
        </div>
        <div  class="card">
             <div class="image-section">
                      <img src="https://aiakademin.io/wp-content/uploads/2023/10/AI-1.png" alt="Why Learn AI">
                </div>
                <div class="text-section">
                    <h2>Varför välja oss?</h2>
                    <p>Med gedigen erfarenhet och både tekniska och pedagogiska kunskaper hjälper vi er på bästa sätt att komma igång med att använda AI och förstå fördelarna, precis som vi gör.</p>
                </div>
        </div>
      </div>
    </div>

</template>
<style scoped>

/* Gemensamma stilar för komponenten */
.why-learn-ai {
  width: 100%;
  background-color: #2e91fc;
  color:White;
  margin: 0 auto;
  padding: 80px;
  
}
.card{
    display:Flex;
    align-items: center;
    justify-content: center;
    gap:40px;
    color:white;
}
/* Stilar för text och bild */
.content {
  display: flex;
  flex-direction: column;
  gap:40px;
  align-items: center;
  justify-content: center;
}

.image-section img {
  max-width: 300px;
  height: auto;
  margin-right: 20px;
}

.text-section {
  flex: 0.7;
  color:white;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  color:rgba(255, 255, 255, 0.95);
}
@media (max-width: 800px) {
  .card{
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
}
</style>
<script>
export default {
    name: 'WhyLearnAI'
};
</script>