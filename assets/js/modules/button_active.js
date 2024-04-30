import CreatePassword from './create_password.js'

console.log('Cheguei aqui')
document.addEventListener('click', e => {
   const elem = e.target.classList.value
   if(elem === 'botao_GS') {
      const new_pw = new CreatePassword()
      new_pw.get_options_password()
   }
})