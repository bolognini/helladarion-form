import { useState, useEffect } from 'react'

type Attribute = {
  inputList: Array<{ label: string; placeholder: string; id: string }>
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
      id: 'level'
    },
    {
      label: 'Pontos de Vida',
      placeholder: '144',
      id: 'healthpoints'
    },
    {
      label: 'Defesa',
      placeholder: '21',
      id: 'defense'
    },
    {
      label: 'Deslocamento',
      placeholder: '9',
      id: 'distance'
    }
  ]

  const attributesList = [
    {
      label: 'Força',
      placeholder: '25',
      id: 'FOR'
    },
    {
      label: 'Destreza',
      placeholder: '12',
      id: 'DES'
    },
    {
      label: 'Constituição',
      placeholder: '23',
      id: 'CON'
    },
    {
      label: 'Inteligência',
      placeholder: '6',
      id: 'INT'
    },
    {
      label: 'Sabedoria',
      placeholder: '12',
      id: 'SAB'
    },
    {
      label: 'Carisma',
      placeholder: '9',
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
