type Attribute = {
  inputList: Array<{ label: string; placeholder: string; id: string }>
}

interface Props {
  simple?: boolean
}

export const useAttributes = ({ simple }: Props): Attribute => {
  const simpleList = [
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

  const biggerList = [
    {
      label: 'Força',
      placeholder: '25',
      id: 'for'
    },
    {
      label: 'Destreza',
      placeholder: '12',
      id: 'des'
    },
    {
      label: 'Constituição',
      placeholder: '23',
      id: 'con'
    },
    {
      label: 'Inteligência',
      placeholder: '6',
      id: 'int'
    },
    {
      label: 'Sabedoria',
      placeholder: '12',
      id: 'sab'
    },
    {
      label: 'Carisma',
      placeholder: '9',
      id: 'car'
    }
  ]

  const inputList = simple ? simpleList : biggerList

  return {
    inputList
  }
}
