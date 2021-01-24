type Props = {
  inputList: Array<{ label: string; placeholder: string; id: string }>
}

export const useAttributes = (): Props => {
  const inputList = [
    {
      label: 'Nível de Desafio',
      placeholder: '5',
      id: 'level'
    },
    {
      label: 'Pontos de Vida',
      placeholder: '144',
      id: 'hp'
    },
    {
      label: 'Defesa',
      placeholder: '21',
      id: 'defense'
    },
    {
      label: 'Deslocamento',
      placeholder: '9',
      id: 'range'
    }
  ]

  return {
    inputList
  }
}
