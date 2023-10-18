const consumirAPI = async () => {



  const cep = document.querySelector('#cep')

  if (cep.value === '') {
    alert('preencha corretamente')

  }

  else {
    try {
      const Buscar = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

      if (Buscar.ok) {
        const resposta = await Buscar.json()
        mostrarDados(resposta)
      }

      else {

        throw new Error('NÃO FOI POSSÍVEL EXECUTAR A SUA REQUISIÇÃO')

      }



    }

    catch (err) {

      mostrarDados({ err: true })

    }

  }







}

const mostrarDados = (dados) => {
  const resultado = document.querySelector('#resultado')

  if (dados.err) {
    resultado.innerHTML = 'CEP não encontrado.'

  }

  else {


    resultado.innerHTML = `
    <p>CEP: ${dados.cep}</p>
    <p>Rua: ${dados.logradouro}</p>
    <p>Cidade: ${dados.localidade}</p>
    <p>UF: ${dados.uf}</p>
    
    
    `

  }


}

function limpar()
{
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = ''

}
