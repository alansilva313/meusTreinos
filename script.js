var lista = [
    {
        treinoA: 'PUXADA LATERAL NO CROSS COM ARGOLA 4X20',
    }, 
    {
        treinoA: 'PUXADOR PEGADA NEUTRA DROP 4X',
    },
    {
        treinoA: 'PUXADOR ALTO COM CORDA 4X 20',

    },
  
    {
        treinoA: 'CRUCIFIXO INVERTIDO CROSS POLIA BAIXA 4X15',

    },
    {
        treinoA: 'ROSCA SCOTT NO CROSS DROP 4X',

    },

    {
        treinoA: 'ROSCA ALTA COM ARGOLA NO CROSS 4X 12',
    },
   

    {
        treinoA: 'ROSCA DIRETA BARRA LIVRE 4XFALHA',

    },
    {
        treinoA: 'PRANCHA SERROTE 4X15'

    },

 

    
]

lista.forEach(dados => {
    document.querySelector(".lista").innerHTML += `

    <div class='treino'>
         <input type='checkbox'>
        <label>${dados.treinoA}</label>

        </div>
    
    `
})
