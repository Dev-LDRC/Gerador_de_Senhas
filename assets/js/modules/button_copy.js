const password = document.querySelector(".senha")
const button_copy = document.querySelector(".button_copy")

button_copy.addEventListener("click", () => {

   Toastify({

      text: "COPIADO! ✔",

      position: "center", // `left`, `center` or `right`

      offset: {
         y: 20
      },

      style: {
         background: "linear-gradient(to right, #00b09b, #96c93d)",
         padding: "20px",
         borderRadius: "10px",
         border: "4px solid white"
      },

      duration: 2250

   }).showToast();

   console.log(password.innerText)
	navigator.clipboard.writeText(password.innerText);
   console.log("Copied!")
})