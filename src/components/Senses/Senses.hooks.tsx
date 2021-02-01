import { useState } from 'react'

type Senses = {
  inputList: Array<{ largePlaceholder: string; smallPlaceholder: string }>
  onAddInput: () => void
}

export const useSenses = (): Senses => {
  const [inputList, setInputList] = useState([
    {
      largePlaceholder: 'Iniciativa +5',
      smallPlaceholder: 'D20 + 16'
    },
    {
      largePlaceholder: 'Percepção +9',
      smallPlaceholder: 'D20 + 18'
    },
    {
      largePlaceholder: 'Visão no Escuro',
      smallPlaceholder: '-'
    }
  ])

  const onAddInput = () =>
    setInputList([
      ...inputList,
      { largePlaceholder: 'Novo Sentido', smallPlaceholder: 'Nova rolagem' }
    ])

  return {
    inputList,
    onAddInput
  }
}
