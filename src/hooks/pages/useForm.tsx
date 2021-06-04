import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'

type Props = {
  currentStep: number
  setCurrentStep: (currentStep: number) => void
  backButtonLabel: string
  nextButtonLabel: string
  onSendData: () => void
  changeLanguage: (language: string) => void
}

export const useForm = (): Props => {
  const dispatch = useDispatch()
  const monsterData = useSelector(({ monsterData }) => monsterData.data)
  const {
    button: { form: formButton }
  } = useSelector(({ language }) => language)
  const [currentStep, setCurrentStep] = useState(0)
  const [backButtonLabel, setBackButtonLabel] = useState(formButton.cancel)
  const [nextButtonLabel, setNextButtonLabel] = useState(formButton.next)

  const changeLanguage = language => {
    dispatch({ type: language })
  }

  useEffect(() => {
    const loadedLanguage = localStorage.getItem('language') || 'ENGLISH'
    dispatch({ type: loadedLanguage })
  }, [])

  useEffect(() => {
    currentStep > 0
      ? setBackButtonLabel(formButton.back)
      : setBackButtonLabel(formButton.cancel)

    currentStep > 6
      ? setNextButtonLabel(formButton.finish)
      : setNextButtonLabel(formButton.next)
  }, [currentStep, formButton])

  const onSendData = () => {
    axios
      .post('https://helladarion.herokuapp.com/monster/create', monsterData)
      .then(res => {
        const theme = localStorage.getItem('darkMode')
        const language = localStorage.getItem('language')
        localStorage.clear()
        localStorage.setItem('darkMode', theme)
        localStorage.setItem('language', language)
        window.open(
          `https://helladarion-codex.netlify.app/?id=${res.data.id}`,
          '_blank'
        )
      })
      .catch(error => console.error(error))
  }

  return {
    currentStep,
    setCurrentStep,
    backButtonLabel,
    nextButtonLabel,
    onSendData,
    changeLanguage
  }
}
