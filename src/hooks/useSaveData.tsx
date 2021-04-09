type Props = {
  layer?: string
  id: string
  value: string
}

interface ISaveData {
  onSaveData: ({ id, value }: Props) => void
  onSaveDataAsObject: ({ id, value }: Props) => void
}

export const useSaveData = (): ISaveData => {
  const onSaveData = ({ id, value }: Props) => {
    const initialData = JSON.parse(window.localStorage.getItem('data'))

    window.localStorage.setItem(
      'data',
      JSON.stringify({
        ...initialData,
        [id]: value
      })
    )
  }
  const onSaveDataAsObject = ({ layer, id, value }: Props) => {
    const initialData = JSON.parse(window.localStorage.getItem('data'))
    const initialLayerData = JSON.parse(window.localStorage.getItem('data'))[
      layer
    ]

    const baseModificator = -5
    const modificator = Math.floor(Number(value) / 2) + baseModificator

    window.localStorage.setItem(
      'data',
      JSON.stringify({
        ...initialData,
        [layer]: {
          ...initialLayerData,
          [id]: {
            value,
            modificator
          }
        }
      })
    )
  }

  return {
    onSaveData,
    onSaveDataAsObject
  }
}
