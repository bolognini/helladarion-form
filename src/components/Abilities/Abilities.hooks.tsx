import { useState, useEffect } from 'react'

interface IAbilities {
  abilitiesList: Array<
    Array<{
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
      { label: 'Nome', placeholder: 'Mordida +17', size: 'medium' },
      { label: 'Bônus', placeholder: '1D4', size: 'xsmall' },
      { label: 'Dano', placeholder: '2D6 + 7', size: 'xsmall' },
      { label: 'Crítico', placeholder: '2x', size: 'xsmall' },
      { label: 'Tipo', placeholder: 'Veneno', size: 'xsmall' },
      { label: 'Alcance', placeholder: '18m', size: 'xsmall' },
      { label: 'Teste', placeholder: 'Luta', size: 'medium' }
    ]
  ]

  const newAbility = [
    { label: '', placeholder: '-', size: 'medium' },
    { label: '', placeholder: '-', size: 'xsmall' },
    { label: '', placeholder: '-', size: 'xsmall' },
    { label: '', placeholder: '-', size: 'xsmall' },
    { label: '', placeholder: '-', size: 'xsmall' },
    { label: '', placeholder: '-', size: 'xsmall' },
    { label: '', placeholder: '-', size: 'medium' }
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
