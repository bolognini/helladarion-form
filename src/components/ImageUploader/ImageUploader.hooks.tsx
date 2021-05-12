import { useState, useEffect } from 'react'
import { useSaveData } from 'hooks/useSaveData'
import { useLocalStorage } from 'hooks/useLocalStorage'

interface IUseImageUploader {
  onSaveImage: ({ file }) => void
  imageSource: string
  themeUploader: string
}

interface IProps {
  theme: boolean
}

export const useImageUploader = ({ theme }: IProps): IUseImageUploader => {
  const [imageSource, setImageSource] = useState(null)
  const [themeUploader, setThemeUploader] = useState('/uploader-dark.svg')
  const { updateMonsterData } = useSaveData()
  const { saveOnLocalStorage } = useLocalStorage({ id: 'mugshot' })

  useEffect(() => {
    setImageSource(localStorage.getItem('mugshot'))
  }, [])

  useEffect(() => {
    theme
      ? setThemeUploader('/uploader-dark.svg')
      : setThemeUploader('/uploader-light.svg')
  }, [theme])

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
    imageSource,
    themeUploader
  }
}
