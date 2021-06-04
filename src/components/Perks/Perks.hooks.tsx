import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

type Perks = {
  listType: string
  inputList: Array<{ largePlaceholder: string; smallPlaceholder: string }>
  onAddInput: () => void
  label: {
    [key: string]: string
  }
}
interface IProps {
  secondary?: boolean
}

export const usePerks = ({ secondary = false }: IProps): Perks => {
  const {
    senses: { label, placeholder }
  } = useSelector(({ language }) => language)
  const senses = [
    {
      largePlaceholder: placeholder.sense.first,
      smallPlaceholder: 'D20 + 5'
    },
    {
      largePlaceholder: placeholder.sense.second,
      smallPlaceholder: 'D20 + 9'
    },
    {
      largePlaceholder: placeholder.sense.third,
      smallPlaceholder: '-'
    }
  ]

  const skills = [
    {
      largePlaceholder: placeholder.skill.first,
      smallPlaceholder: 'D20 + 14'
    },
    {
      largePlaceholder: placeholder.skill.second,
      smallPlaceholder: 'D20 + 9'
    },
    {
      largePlaceholder: placeholder.skill.third,
      smallPlaceholder: 'D20 + 5'
    }
  ]

  const [inputList, setInputList] = useState([])
  const [newPlaceholder, setNewPlaceholder] = useState('')
  const [listType, setListType] = useState('')

  useEffect(() => {
    const initialList = secondary
      ? {
          list: skills,
          placeholder: placeholder.newSkill
        }
      : {
          list: senses,
          placeholder: placeholder.newSense
        }

    secondary ? setListType('skills') : setListType('senses')
    setInputList(initialList.list)
    setNewPlaceholder(initialList.placeholder)
    const inputList = Array.from(document.querySelectorAll('input'))
    inputList.forEach(input => (input.value = ''))
  }, [secondary, placeholder])

  const onAddInput = () =>
    setInputList([
      ...inputList,
      { largePlaceholder: newPlaceholder, smallPlaceholder: 'Nova rolagem' }
    ])

  return {
    inputList,
    onAddInput,
    listType,
    label
  }
}
