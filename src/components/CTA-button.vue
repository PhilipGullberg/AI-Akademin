
<template>
        <router-link :to="route">
            <button class="cta-button">{{ buttonText }}</button>
        </router-link>
 
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  }
};
</script>
<style>

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

@media only screen and (max-width: 768px) {
  .cta-button{
    margin:1.2rem;
    background-color: white;


  }
  .cta-button:hover {
  background-color: #B8AD8B;
  color:White;

}
}
</style>