import Head from 'next/head'
import { useStepper } from './Stepper.hooks'
import { Container, StepperWrapper } from './Stepper.style'

export const Stepper: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  const {
    activeStep: { title, description, component }
  } = useStepper(currentStep)

  return (
    <Container>
      <Head>
        <title>{`Helladarion: ${title}`}</title>
      </Head>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <StepperWrapper>{component}</StepperWrapper>
    </Container>
  )
}
