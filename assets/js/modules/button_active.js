import CreatePassword from './create_password.js'
const button_copy = document.querySelector(".button_copy")

// console.log('Cheguei aqui')
document.addEventListener('click', e => {
   const elem = e.target.classList.value
   if(elem === 'botao_GS') {
      button_copy.classList.remove("hide_elem")
      const new_pw = new CreatePassword()
      new_pw.get_options_password()
   }
})