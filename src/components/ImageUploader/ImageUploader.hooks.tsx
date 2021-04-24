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
        const readerResult: string = reader.result as string
        setImageSource(reader.result)
        updateMonsterData({
          id: 'mugshot',
          value: window.btoa(readerResult)
        })
        saveOnLocalStorage({
          value: String(readerResult)
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
