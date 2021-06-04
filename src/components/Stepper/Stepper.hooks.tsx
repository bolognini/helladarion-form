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
  const monsterData = useSelector(({ monsterData }) => monsterData.data)
  const language = useSelector(({ language }) => language)

  const step = [
    {
      title: language.profile.title,
      component: <Profile theme={theme} constants={language.profile} />
    },
    {
      title: language.attributes.title,
      description: language.attributes.description,
      component: <Attributes coreAttributes />
    },
    {
      title: language.attributes.title,
      description: language.attributes.secondDescription,
      component: <Attributes />
    },
    {
      title: language.senses.title,
      description: language.senses.description,
      component: <Perks />
    },
    {
      title: language.skills.title,
      description: language.skills.description,
      component: <Perks secondary />
    },
    {
      title: language.abilities.title,
      description: language.abilities.description,
      component: <Abilities />
    },
    {
      title: language.loot.title,
      description: language.loot.description,
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
