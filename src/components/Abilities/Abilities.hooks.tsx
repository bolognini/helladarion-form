import { useState, useEffect } from 'react'

interface IAbilities {
  abilitiesList: Array<
    Array<{
      id: string
      label?: string
      placeholder?: string
      size?: string
    }>
  >
  onAddAbility: () => void
}

export const useAbilities = (): IAbilities => {
  const [abilitiesList, setAbilitiesList] = useState([[]])

  const list = [
    [
      {
        label: 'Nome',
        placeholder: 'Mordida +17',
        size: 'medium',
        id: 'attackName',
        maxlength: '20'
      },
      {
        label: 'Bônus',
        placeholder: '1D4',
        size: 'xsmall',
        id: 'bonus',
        maxlength: '9'
      },
      {
        label: 'Dano',
        placeholder: '2D6 + 7',
        size: 'xsmall',
        id: 'damage',
        maxlength: '9'
      },
      {
        label: 'Crítico',
        placeholder: '2x',
        size: 'xsmall',
        id: 'critic',
        maxlength: '9'
      },
      {
        label: 'Tipo',
        placeholder: 'Veneno',
        size: 'xsmall',
        id: 'attType',
        maxlength: '9'
      },
      {
        label: 'Alcance',
        placeholder: '18m',
        size: 'xsmall',
        id: 'range',
        maxlength: '9'
      },
      {
        label: 'Teste Oposto',
        placeholder: 'Luta',
        size: 'medium',
        id: 'test',
        maxlength: '20'
      }
    ]
  ]

  const newAbility = [
    {
      label: '',
      placeholder: '-',
      size: 'medium',
      id: 'attackName',
      maxlength: '20'
    },
    {
      label: '',
      placeholder: '-',
      size: 'xsmall',
      id: 'bonus',
      maxlength: '9'
    },
    {
      label: '',
      placeholder: '-',
      size: 'xsmall',
      id: 'damage',
      maxlength: '9'
    },
    {
      label: '',
      placeholder: '-',
      size: 'xsmall',
      id: 'critic',
      maxlength: '9'
    },
    {
      label: '',
      placeholder: '-',
      size: 'xsmall',
      id: 'attType',
      maxlength: '9'
    },
    {
      label: '',
      placeholder: '-',
      size: 'xsmall',
      id: 'range',
      maxlength: '9'
    },
    { label: '', placeholder: '-', size: 'medium', id: 'test', maxlength: '20' }
  ]

  for (let index = 0; index < 3; index++) {
    list.push(newAbility)
  }

  useEffect(() => {
    setAbilitiesList(list)
  }, [])

  const onAddAbility = () => setAbilitiesList([...abilitiesList, newAbility])

  return {
    abilitiesList,
    onAddAbility
  }
}
