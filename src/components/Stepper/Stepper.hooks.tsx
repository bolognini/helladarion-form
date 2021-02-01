import { Attributes } from 'components/Attributes/Attributes'
import { Senses } from 'components/Senses/Senses'
import { Profile } from 'components/Profile/Profile'

interface IStep {
  activeStep: { title: string; description?: string; component: JSX.Element }
}

export const useStepper = (currentStep: number): IStep => {
  const step = [
    {
      title: 'Perfil da Criatura',
      component: <Profile />
    },
    {
      title: 'Atributos',
      description:
        'O deslocamento aceita apenas um valor, sem unidade de medida. Não se preocupe. Na ficha é possível realizar anotações diversas, inclusive particularidades de deslocamento.',
      component: <Attributes simple />
    },
    {
      title: 'Atributos',
      description:
        'Insira apenas o valor dos atributos. Os modificadores serão calculados automaticamente na ficha',
      component: <Attributes />
    },
    {
      title: 'Sentidos',
      description:
        'A ficha destaca apenas três sentidos. Demais sentidos poderão ser acessados no modal de sentidos, na ficha digital',
      component: <Senses />
    }
  ]

  const activeStep = step[currentStep]

  return {
    activeStep
  }
}
