import { useRouter } from 'next/router'
import { Button } from 'components/Button/Button'
import { useForm } from 'hooks/pages/useForm'
import { Stepper } from 'components/Stepper/Stepper'
import { Container, ButtonWrapper } from 'styles/pages/Form.style'

const Home: React.FC = () => {
  const router = useRouter()
  const { currentStep, setCurrentStep, backButtonLabel } = useForm()
  return (
    <Container>
      <Stepper currentStep={currentStep} />
      <ButtonWrapper>
        <Button
          secondary
          onClick={() => {
            currentStep > 0 ? setCurrentStep(currentStep - 1) : router.push('/')
          }}
        >
          {backButtonLabel}
        </Button>
        <Button onClick={() => setCurrentStep(currentStep + 1)}>próximo</Button>
      </ButtonWrapper>
    </Container>
  )
}

export default Home
