import { Attributes } from 'components/Attributes/Attributes'
import { Profile } from 'components/Profile/Profile'

interface Step {
  activeStep: { title: string; description?: string; component: JSX.Element }
}

export const useStepper = (currentStep: number): Step => {
  const step = [
    {
      title: 'Perfil da Criatura',
      component: <Profile />
    },
    {
      title: 'Atributos',
      description:
        'O deslocamento aceita apenas um valor, sem unidade de medida. Não se preocupe. Na ficha é possível realizar anotações diversas, inclusive particularidades de deslocamento.',
      component: <Attributes />
    }
  ]

  const activeStep = step[currentStep]

  return {
    activeStep
  }
}
