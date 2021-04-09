import { Profile } from 'components/Profile/Profile'
import { Attributes } from 'components/Attributes/Attributes'
import { Perks } from 'components/Perks/Perks'
import { Abilities } from 'components/Abilities/Abilities'
import { Notes } from 'components/Notes/Notes'
import { Resume } from 'components/Resume/Resume'

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
      component: <Attributes coreAttributes />
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
      component: <Perks />
    },
    {
      title: 'Resistências',
      description:
        'A ficha destaca apenas três resistências. Demais resistências poderão ser acessadas no modal de sentidos, na ficha digital',
      component: <Perks secondary />
    },
    {
      title: 'Ataques',
      description:
        'A ficha destaca apenas quatro ataques. Demais ataques poderão ser acessados no modal de ataques, na ficha digital',
      component: <Abilities />
    },
    {
      title: 'Tesouro e Anotações',
      description:
        'Tanto o tesouro quanto as anotações gerais podem ser compostos por longos textos',
      component: <Notes />
    },
    {
      title: 'Wyvern',
      component: <Resume />
    }
  ]

  const activeStep = step[currentStep]

  return {
    activeStep
  }
}
