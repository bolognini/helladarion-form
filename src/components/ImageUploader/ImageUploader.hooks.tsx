import { useState, useEffect } from 'react'
import { useSaveData } from 'hooks/useSaveData'
import { useLocalStorage } from 'hooks/useLocalStorage'

interface IUseImageUploader {
  onSaveImage: ({ file }) => void
  imageSource: string
}

export const useImageUploader = (): IUseImageUploader => {
  const [imageSource, setImageSource] = useState(null)
  const { updateMonsterData } = useSaveData()
  const { saveOnLocalStorage } = useLocalStorage({ id: 'mugshot' })

  useEffect(() => {
    setImageSource(localStorage.getItem('mugshot'))
  }, [])

  const onSaveImage = ({ file }) => {
    const reader = new FileReader()

    reader.addEventListener(
      'load',
      () => {
        setImageSource(reader.result)
        updateMonsterData({
          id: 'mugshot',
          value: String(reader.result)
        })
        saveOnLocalStorage({
          value: String(reader.result)
        })
      },
      false
    )

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  return {
    onSaveImage,
    imageSource: imageSource
  }
}
