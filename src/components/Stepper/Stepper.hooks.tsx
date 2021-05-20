import { useSelector } from 'react-redux'
import { Profile } from 'components/Profile/Profile'
import { Attributes } from 'components/Attributes/Attributes'
import { Perks } from 'components/Perks/Perks'
import { Abilities } from 'components/Abilities/Abilities'
import { Notes } from 'components/Notes/Notes'
import { Resume } from 'components/Resume/Resume'

interface IStep {
  activeStep: { title: string; description?: string; component: JSX.Element }
}

export const useStepper = (currentStep: number, theme: boolean): IStep => {
  const monsterData = useSelector(state => state.data)

  const step = [
    {
      title: 'Perfil da Criatura',
      component: <Profile theme={theme} />
    },
    {
      title: 'Atributos',
      description:
        'O deslocamento aceita apenas um valor, sem unidade de medida. Na ficha é possível anotar demais particularidades.',
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
      title: 'Perícia',
      description:
        'A ficha destaca apenas três perícia. Demais perícias poderão ser acessadas no modal de sentidos, na ficha digital',
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
      title: monsterData.name ? monsterData.name : 'New Monster',
      component: <Resume />
    }
  ]

  const activeStep = step[currentStep]

  return {
    activeStep
  }
}
