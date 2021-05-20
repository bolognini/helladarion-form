import { useState, useEffect } from 'react'

type Perks = {
  listType: string
  inputList: Array<{ largePlaceholder: string; smallPlaceholder: string }>
  onAddInput: () => void
}
interface IProps {
  secondary?: boolean
}

export const usePerks = ({ secondary = false }: IProps): Perks => {
  const senses = [
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

  const skills = [
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
          list: skills,
          placeholder: 'Nova Perícia'
        }
      : {
          list: senses,
          placeholder: 'Novo Sentido'
        }

    secondary ? setListType('skills') : setListType('senses')
    setInputList(initialList.list)
    setNewPlaceholder(initialList.placeholder)
    const inputList = Array.from(document.querySelectorAll('input'))
    inputList.forEach(input => (input.value = ''))
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
