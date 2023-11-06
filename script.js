
function buscaCep() {
  const cep = document.getElementById("cep").value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      if (!data.erro) {
        document.getElementById("endereco").value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
      } else {
        alert("CEP não encontrado.");
      }
    })
    .catch(error => {
      console.error(error);
    });
}

// Função para validar o formulário
document.getElementById("formulario").addEventListener("submit", function(event) {
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const idade = document.getElementById("idade").value;
  const email = document.getElementById("email").value;
  const cep = document.getElementById("cep").value;
  const endereco = document.getElementById("endereco").value;
  const sexo = document.getElementById("sexo").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const mensagem = document.getElementById("mensagem").value;

  if (!nome || !cpf || !idade || !email || !cep || !endereco || !sexo || !dataNascimento || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    event.preventDefault();
  } else {

  }
});
class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
        const formObject = {
          nome: this.form.querySelector("#nome").value,
          cpf: this.form.querySelector("#cpf").value,
          cep: this.form.querySelector("#cep").value,
          email: this.form.querySelector("#email").value,
          idade: this.form.querySelector("#idade").value,
          endereco: this.form.querySelector("#endereco").value,
          sexo: this.form.querySelector("#sexo").value,
          mensagem: this.form.querySelector("#mensagem").value,
          dataNascimento: this.form.querySelector("#dataNascimento").value
        };
        return formObject;
      }
      
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();
  