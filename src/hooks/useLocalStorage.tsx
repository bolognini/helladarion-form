import { useState, useEffect } from 'react'

type Props = {
  id: string
}

type FunctionProps = {
  value: string
}

interface ILocalStorage {
  saveOnLocalStorage: ({ value }: FunctionProps) => void
  loadFromLocalStorage: () => string
  defaultValue: string
}

export const useLocalStorage = ({ id }: Props): ILocalStorage => {
  const [defaultValue, setDefaultValue] = useState('')

  const saveOnLocalStorage = ({ value }) => {
    localStorage.setItem(`${id}`, value)
  }

  const loadFromLocalStorage = () => {
    return localStorage.getItem(`${id}`)
  }

  useEffect(() => {
    setDefaultValue(loadFromLocalStorage())
  }, [saveOnLocalStorage])

  return {
    saveOnLocalStorage,
    loadFromLocalStorage,
    defaultValue
  }
}
