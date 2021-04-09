import { useEffect, useState } from 'react'

type Props = {
  currentStep: number
  setCurrentStep: (currentStep: number) => void
  backButtonLabel: string
  nextButtonLabel: string
}

export const useForm = (): Props => {
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

  return {
    currentStep,
    setCurrentStep,
    backButtonLabel,
    nextButtonLabel
  }
}
