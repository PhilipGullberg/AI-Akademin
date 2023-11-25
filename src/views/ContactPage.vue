<template>
    <div class="contact-page">
      <div class="contact-form">
        <h2>Kontakta oss</h2>
        <p>Skicka gärna en förfrågan om ni vill boka en föreläsning eller workshop, eller bara ställa en fråga om våra tjänster.
            <br>Föreslå gärna en tid som passar er, så återkommer vi om tiden passar.
        </p>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Namn:</label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label for="name">Email:</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>
          <div class="form-group">
            <label for="organization">Organisation:</label>
            <input type="text" id="organization" v-model="formData.organization">
          </div>
          <div class="form-group">
            <label for="service">Välj tjänst:</label>
            <select id="service" v-model="formData.service">
              <option value="Föreläsning">Föreläsning</option>
              <option value="Workshop">Workshop</option>
              <option value="Föreläsning+Workshop">Föreläsning+Workshop</option>
            </select>
          </div>
          <div class="form-group">
            <label for="date">Förslaget datum:</label>
            <input type="date" id="date" v-model="formData.date">
          </div>
          <div class="form-group">
            <label for="freetext">Meddelande:</label>
            <textarea cols="50" rows="5" id="organization" v-model="formData.message"></textarea>
          </div>
          <button type="submit">Skicka</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>

  export default {
   
    data() {
      return {
        formData: {
          name: '',
          email:'',
          organization: '',
          service: 'Föreläsning',
          date: '',
        }
      };
    },
    methods: {
        submitForm() {
        // Hantera formulärdata här

            this.sendEmail(this.formData);
        },

        

        sendEmail(formData) {
            
            const emailContent = `
                Från: ${formData.name}
                Mail: ${formData.email} 
                Meddelande: ${formData.message} 
                organization: ${formData.organization} 
                service: ${formData.service} 
                Date: ${formData.date} 
            `;

            const emailLines = emailContent.split('\n');
            const message = emailLines.join('<br>');
            console.log(emailLines)
        }
    },
            
        
    
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
.contact-page {
    display: flex;
    
    justify-content: center;
    align-items: center;
    
    background: linear-gradient(to bottom right, #515338, #82855a);
  }
  textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    resize: none;
    width: 100%;
}
  .contact-form {
    animation: fadeInAnimation 0.4s ease-out;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 50%;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
  }
  .contact-form p{
    margin: 1rem 4rem;
    text-align: center;
    
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  select,
  input[type="date"],
  button {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #B8AD8B;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #726a4f;
  }
  @media only screen and (max-width: 768px) {
    .contact-form {
        width: 95%;

        
        
    }
    .contact-form p{
        display:none;
    }
  }
  </style>
  