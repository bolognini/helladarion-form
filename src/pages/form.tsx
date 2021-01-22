import { useRouter } from 'next/router'
import { Container } from 'styles/pages/Form.style'
import { Button } from 'components/Button/Button'
import { useForm } from 'hooks/pages/useForm'
import { Stepper } from 'components/Stepper/Stepper'

const Home: React.FC = () => {
  const router = useRouter()
  const { currentStep, setCurrentStep } = useForm()
  return (
    <Container>
      <Stepper currentStep={currentStep} />
      <div>
        <Button onClick={() => router.push('/')}>cancelar</Button>
        <Button
          onClick={() => {
            setCurrentStep(currentStep + 1)
          }}
        >
          próximo
        </Button>
      </div>
    </Container>
  )
}

export default Home
