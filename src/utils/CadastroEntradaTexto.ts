
  const secoes = [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos:',
      tituloCheckbox: '',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Insira seu nome completo'
        },
        {
          id: 2,
          label: 'E-mail',
          placeholder: 'Digite um email válido'
        },
        {
          id: 2,
          label: 'Crie uma senha:',
          placeholder: 'Insira sua senha'
        },
        {
          id: 2,
          label: 'Repita sua senha:',
          placeholder: 'Insira sua senha'
        }
      ],
      checkbox: []
    },
    {
      id: 2,
      titulo: 'Agora mais alguns dados sobre você:',
      tituloCheckbox: '',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        },
        {
          id: 1,
          label: 'Endereço',
          placeholder: 'Insira seu endereço'
        },
        {
          id: 1,
          label: 'Número',
          placeholder: 'Insira seu número'
        },
        {
          id: 1,
          label: 'Complemento',
          placeholder: 'Insira seu complemento'
        },
        {
          id: 1,
          label: 'Telefone',
          placeholder: '(00) 00000-0000'
        }
      ],
      checkbox: []
    },
    {
      id: 3,
      titulo: 'Para finalizar, qual seu plano de saúde?',
      entradaTexto: [],
      tituloCheckbox: 'Selecione o plano:',
      checkbox: [
        {
          id: 1,
          value: 'Sulamerica'
        },
        {
          id: 2,
          value: 'Unimed'
        },
        {
          id: 3,
          value: 'Bradesco'
        },
        {
          id: 4,
          value: 'Amil'
        },
        {
          id: 5,
          value: 'Biosaúde'
        },
        {
          id: 6,
          value: 'Biovida'
        },
        {
          id: 7,
          value: 'Outros'
        },
        {
          id: 8,
          value: 'Não tenho plano'
        }
      ]
    }
  ]

  export { secoes }