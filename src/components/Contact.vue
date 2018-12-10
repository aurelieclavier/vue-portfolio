<template>
  <main class="contact">
    <div class="add-product" :class="{'open': formOpen}">
      <div class="button-copy" v-show="!formOpen" @click="formOpen = true">
        Coordonnées
      </div>
      <form @submit="cancel()">
      <div class="telMail">
        <a href="mailto:c.aurelie.pro@gmail.com">c.aurelie.pro@gmail.com</a>
        <a href="tel:+33651014007">06.51.01.40.07</a>
      </div>
        <div class="form--field">
          <label>E-mail :
            <input type="mail" class="form--element" name="title" v-model="productData.title" required="">
          </label>
        </div>
        <div class="form--field">
          <label>Message :
            <textarea
              class="form--element textarea"
              v-model="productData.description">
            </textarea>
          </label>
        </div>

        <button type="submit" class="submit-button">Add Product</button>
        <div class="cancel"><span @click="cancel()">Cancel</span></div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
  data () {
    return {
      formOpen: false,
      productData: {
        title: '',
        rating: '',
        price: '',
        list_price: '',
        is_featured: false
      }
    }
  },
  methods: {
    resetForm: function () {
      this.productData = {
        title: '',
        rating: '',
        price: '',
        list_price: '',
        is_featured: false
      }
    },
    cancel: function () {
      this.formOpen = false
      this.resetForm()
    }
  }
}
</script>
