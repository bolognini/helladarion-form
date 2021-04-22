import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'

type Props = {
  currentStep: number
  setCurrentStep: (currentStep: number) => void
  backButtonLabel: string
  nextButtonLabel: string
  onSendData: () => void
}

export const useForm = (): Props => {
  const monsterData = useSelector(state => state.data)
  const [currentStep, setCurrentStep] = useState(0)
  const [backButtonLabel, setBackButtonLabel] = useState('cancelar')
  const [nextButtonLabel, setNextButtonLabel] = useState('próximo')

  useEffect(() => {
    currentStep > 0
      ? setBackButtonLabel('voltar')
      : setBackButtonLabel('cancelar')

    currentStep > 6
      ? setNextButtonLabel('finalizar')
      : setNextButtonLabel('próximo')
  }, [currentStep])

  const onSendData = () => {
    axios
      .post('http://localhost:3333/monster/create', monsterData)
      .then(res => {
        localStorage.clear()
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
    onSendData
  }
}
