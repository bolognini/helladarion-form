/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

interface IAbilities {
  abilitiesList: Array<
    Array<{
      id: string
      label?: string
      placeholder?: string
      size?: string
      maxlength?: any
    }>
  >
  onAddAbility: () => void
}

export const useAbilities = (): IAbilities => {
  const {
    abilities: { label, placeholder }
  } = useSelector(({ language }) => language)
  const [abilitiesList, setAbilitiesList] = useState([[]])

  const list = [
    [
      {
        label: label.name,
        placeholder: placeholder.name,
        size: 'small',
        id: 'attackName',
        maxlength: '20'
      },
      {
        label: label.action,
        placeholder: placeholder.action,
        size: 'xsmall',
        id: 'action',
        maxlength: '12'
      },
      {
        label: label.mana,
        placeholder: placeholder.mana,
        size: 'xsmall',
        id: 'manaCost',
        maxlength: '5'
      },
      {
        label: label.damage,
        placeholder: placeholder.damage,
        size: 'xsmall',
        id: 'damage',
        maxlength: '9'
      },
      {
        label: label.bonus,
        placeholder: placeholder.bonus,
        size: 'xsmall',
        id: 'bonus',
        maxlength: '9'
      },
      {
        label: label.critic,
        placeholder: placeholder.critic,
        size: 'xsmall',
        id: 'critic',
        maxlength: '9'
      },
      {
        label: label.attType,
        placeholder: placeholder.attType,
        size: 'xsmall',
        id: 'attType',
        maxlength: '9'
      },
      {
        label: label.range,
        placeholder: placeholder.range,
        size: 'xsmall',
        id: 'range',
        maxlength: '9'
      },
      {
        label: label.test,
        placeholder: placeholder.test,
        size: 'small',
        id: 'test',
        maxlength: '20'
      }
    ]
  ]

  const newAbility = [
    {
      label: '',
      placeholder: '-',
      size: 'small',
      id: 'attackName',
      maxlength: '20'
    },
    {
      label: '',
      placeholder: '-',
      size: 'xsmall',
      id: 'action',
      maxlength: '20'
    },
    {
      label: '',
      placeholder: '-',
      size: 'xsmall',
      id: 'manaCost',
      maxlength: '20'
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
      id: 'bonus',
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
    { label: '', placeholder: '-', size: 'small', id: 'test', maxlength: '20' }
  ]

  for (let index = 0; index < 3; index++) {
    list.push(newAbility)
  }

  useEffect(() => {
    setAbilitiesList(list)
  }, [placeholder])

  const onAddAbility = () => setAbilitiesList([...abilitiesList, newAbility])

  return {
    abilitiesList,
    onAddAbility
  }
}
