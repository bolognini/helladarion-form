import { useState } from 'react'

type Props = {
  currentStep: number
  setCurrentStep: (currentStep: number) => void
}

export const useForm = (): Props => {
  const [currentStep, setCurrentStep] = useState(0)

  return {
    currentStep,
    setCurrentStep
  }
}
