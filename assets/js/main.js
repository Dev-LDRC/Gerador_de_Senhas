class CreatePassword {
   constructor() {
      this.new_password = ''
   }

   generate_password(label_qtd_carac, options) {

      // label_qtd_carac = parseInt(label_qtd_carac)

      let i = 0
      while(i < label_qtd_carac) {

         for(let j of options) {

            if(this.new_password.length == label_qtd_carac) {
               break;
            }
            const indiceAleatorio = Math.floor(Math.random() * j.length);
            const result = j[indiceAleatorio];
   
            this.new_password += result
            i++

         }

      }

      document.querySelector('.senha').textContent = this.new_password

   }

   get_options_password() {

      const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'.split('');
      const simbolos = '!@#$%^&*()-_=+[{]}|;:,<.>/?'.split('');

      const list_options = []

      document.querySelectorAll('.check_box').forEach((e) => {

         if(e.name === 'A_N') {
            e.checked === true ? list_options.push(numeros) : undefined
         }
         if(e.name === 'L_mai') {
            e.checked === true ? list_options.push(letrasMaiusculas) : undefined
         }
         if(e.name === 'L_min') {
            e.checked === true ? list_options.push(letrasMinusculas) : undefined
         }
         if(e.name === 'L_s') {
            e.checked === true ? list_options.push(simbolos) : undefined
         }
      })

      const qtd_carac = document.querySelector('.qtd_carcteres_input').value.trim()

      if(isNaN(qtd_carac) === true || qtd_carac === '') {
         return alert('Digite a "Quantidade de Caracteres"')
      }

      if(Boolean(...list_options)) {
         this.generate_password(qtd_carac, list_options)
      } else {
         return alert('Escolha uma Opção para gerar senhas')
      }

   }

}

document.addEventListener('click', e => {
   const elem = e.target.classList.value
   if(elem === 'botao_GS') {
      const new_pw = new CreatePassword()
      new_pw.get_options_password()
   }
})