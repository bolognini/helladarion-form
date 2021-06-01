import Head from 'next/head'
import { Transition } from 'components/Transition/Transition'
import { useStepper } from './Stepper.hooks'
import { Container, Description, StepperWrapper } from './Stepper.style'

export const Stepper: React.FC<{
  currentStep: number
  theme: boolean
}> = ({ currentStep, theme }) => {
  const {
    activeStep: { title, description, component }
  } = useStepper(currentStep, theme)

  return (
    <Transition transitionKey={currentStep}>
      <Container>
        <Head>
          <title>{`Helladarion: ${title}`}</title>
        </Head>
        <h1>{title}</h1>
        {description && <Description>{description}</Description>}
        <StepperWrapper>{component}</StepperWrapper>
      </Container>
    </Transition>
  )
}
