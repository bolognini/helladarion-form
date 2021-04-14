import { useDispatch } from 'react-redux'

type Props = {
  layer?: string
  type?: string
  listType?: string
  id: string
  index?: number
  value: string
}

interface ISaveData {
  updateMonsterData: ({ id, value }: Props) => void
}

export const useSaveData = (): ISaveData => {
  const dispatch = useDispatch()

  const updateMonsterData = ({
    type = 'UPDATE_DATA',
    listType,
    index,
    id,
    value
  }) => {
    dispatch({ type, [id]: value, index, listType })
  }

  return {
    updateMonsterData
  }
}
