const contactFormAPI = () => {
  const $form = document.querySelector('#form')
  $form.addEventListener('submit', handleSubmit)

  const handleSubmit = async (event) => {
    console.log('evento: ', event)
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        "accept": "application/json"
      }
    })
    if (response.ok) {
      this.reset()
      alert("Gracias por contactarme")
    }
  }
}
export { contactFormAPI }