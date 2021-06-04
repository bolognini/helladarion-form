import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

type Attribute = {
  inputList: Array<{
    label: string
    placeholder: string
    id: string
    inputLength: string
  }>
  attributeType: string
}

interface IProps {
  coreAttributes?: boolean
}

export const useAttributes = ({ coreAttributes }: IProps): Attribute => {
  const { core, attr } = useSelector(
    ({ language: { attributes } }) => attributes
  )
  const [attributeType, setAttributeType] = useState(null)

  const coreAttributesList = [
    {
      label: core.level,
      placeholder: '5',
      inputLength: '3',
      id: 'challengeLevel'
    },
    {
      label: core.healthpoints,
      placeholder: '144',
      inputLength: '3',
      id: 'healthpoints'
    },
    {
      label: core.mana,
      placeholder: '32',
      inputLength: '3',
      id: 'manapoints'
    },
    {
      label: core.movement,
      placeholder: '9',
      inputLength: '3',
      id: 'distance'
    },
    {
      label: core.armor,
      placeholder: '21',
      inputLength: '3',
      id: 'defense'
    }
  ]

  const attributesList = [
    {
      label: attr.strength,
      placeholder: '25',
      inputLength: '2',
      id: 'FOR'
    },
    {
      label: attr.dexterity,
      placeholder: '12',
      inputLength: '2',
      id: 'DES'
    },
    {
      label: attr.constitution,
      placeholder: '23',
      inputLength: '2',
      id: 'CON'
    },
    {
      label: attr.intelligence,
      placeholder: '6',
      inputLength: '2',
      id: 'INT'
    },
    {
      label: attr.wisdom,
      placeholder: '12',
      inputLength: '2',
      id: 'SAB'
    },
    {
      label: attr.charisma,
      placeholder: '9',
      inputLength: '2',
      id: 'CAR'
    }
  ]

  const inputList = coreAttributes ? coreAttributesList : attributesList

  useEffect(() => {
    !coreAttributes && setAttributeType('attributes')
  }, [inputList])

  return {
    inputList,
    attributeType
  }
}
