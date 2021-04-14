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
        id: 'attackName'
      },
      { label: 'Bônus', placeholder: '1D4', size: 'xsmall', id: 'bonus' },
      { label: 'Dano', placeholder: '2D6 + 7', size: 'xsmall', id: 'damage' },
      { label: 'Crítico', placeholder: '2x', size: 'xsmall', id: 'critic' },
      { label: 'Tipo', placeholder: 'Veneno', size: 'xsmall', id: 'attType' },
      { label: 'Alcance', placeholder: '18m', size: 'xsmall', id: 'range' },
      { label: 'Teste', placeholder: 'Luta', size: 'medium', id: 'test' }
    ]
  ]

  const newAbility = [
    { label: '', placeholder: '-', size: 'medium', id: 'attackName' },
    { label: '', placeholder: '-', size: 'xsmall', id: 'bonus' },
    { label: '', placeholder: '-', size: 'xsmall', id: 'damage' },
    { label: '', placeholder: '-', size: 'xsmall', id: 'critic' },
    { label: '', placeholder: '-', size: 'xsmall', id: 'attType' },
    { label: '', placeholder: '-', size: 'xsmall', id: 'range' },
    { label: '', placeholder: '-', size: 'medium', id: 'test' }
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
