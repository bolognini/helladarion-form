import { useEffect, useState } from 'react'

type Props = {
  currentStep: number
  setCurrentStep: (currentStep: number) => void
  backButtonLabel: string
}

export const useForm = (): Props => {
  const [currentStep, setCurrentStep] = useState(0)
  const [backButtonLabel, setBackButtonLabel] = useState('cancelar')

  useEffect(() => {
    if (currentStep > 0) {
      setBackButtonLabel('voltar')
    } else {
      setBackButtonLabel('cancelar')
    }
  }, [currentStep])

  return {
    currentStep,
    setCurrentStep,
    backButtonLabel
  }
}
