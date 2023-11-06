
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
