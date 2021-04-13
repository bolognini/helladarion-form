import { useState, useEffect } from 'react'

type Perks = {
  listType: string
  inputList: Array<{ largePlaceholder: string; smallPlaceholder: string }>
  onAddInput: () => void
}
interface IProps {
  secondary?: boolean
}

export const usePerks = ({ secondary }: IProps): Perks => {
  const sensesList = [
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
  ]

  const resistanceList = [
    {
      largePlaceholder: 'Fortitude +14',
      smallPlaceholder: 'D20 + 20'
    },
    {
      largePlaceholder: 'Reflexo +9',
      smallPlaceholder: 'D20 + 8'
    },
    {
      largePlaceholder: 'Vontade +5',
      smallPlaceholder: 'D20 + 8'
    }
  ]

  const [inputList, setInputList] = useState([])
  const [newPlaceholder, setNewPlaceholder] = useState('')
  const [listType, setListType] = useState('')

  useEffect(() => {
    const initialList = secondary
      ? {
          list: resistanceList,
          placeholder: 'Novo Resistência'
        }
      : {
          list: sensesList,
          placeholder: 'Novo Sentido'
        }

    secondary ? setListType('resistanceList') : setListType('sensesList')
    setInputList(initialList.list)
    setNewPlaceholder(initialList.placeholder)
  }, [secondary])

  const onAddInput = () =>
    setInputList([
      ...inputList,
      { largePlaceholder: newPlaceholder, smallPlaceholder: 'Nova rolagem' }
    ])

  return {
    inputList,
    onAddInput,
    listType
  }
}
