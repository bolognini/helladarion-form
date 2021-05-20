import { useState, useEffect } from 'react'

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
  const [attributeType, setAttributeType] = useState(null)

  const coreAttributesList = [
    {
      label: 'Nível de Desafio',
      placeholder: '5',
      inputLength: '3',
      id: 'challengeLevel'
    },
    {
      label: 'Pontos de Vida',
      placeholder: '144',
      inputLength: '3',
      id: 'healthpoints'
    },
    {
      label: 'Pontos de Mana',
      placeholder: '32',
      inputLength: '3',
      id: 'manapoints'
    },
    {
      label: 'Deslocamento',
      placeholder: '9',
      inputLength: '3',
      id: 'distance'
    },
    {
      label: 'Defesa',
      placeholder: '21',
      inputLength: '3',
      id: 'defense'
    }
  ]

  const attributesList = [
    {
      label: 'Força',
      placeholder: '25',
      inputLength: '2',
      id: 'FOR'
    },
    {
      label: 'Destreza',
      placeholder: '12',
      inputLength: '2',
      id: 'DES'
    },
    {
      label: 'Constituição',
      placeholder: '23',
      inputLength: '2',
      id: 'CON'
    },
    {
      label: 'Inteligência',
      placeholder: '6',
      inputLength: '2',
      id: 'INT'
    },
    {
      label: 'Sabedoria',
      placeholder: '12',
      inputLength: '2',
      id: 'SAB'
    },
    {
      label: 'Carisma',
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
