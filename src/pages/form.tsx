import { useRouter } from 'next/router'
import { Button } from 'components/Button/Button'
import { useForm } from 'hooks/pages/useForm'
import { Stepper } from 'components/Stepper/Stepper'
import { Container, ButtonWrapper } from 'styles/pages/Form.style'
interface IHome {
  value: boolean
  toggle: () => void
}

const Home: React.FC<IHome> = pageProps => {
  const router = useRouter()
  const {
    currentStep,
    setCurrentStep,
    backButtonLabel,
    nextButtonLabel,
    onSendData
  } = useForm()
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
        <Button
          onClick={() => {
            currentStep < 7 ? setCurrentStep(currentStep + 1) : onSendData()
          }}
        >
          {nextButtonLabel}
        </Button>
        {/* <input
          checked={pageProps.value}
          type="checkbox"
          onChange={pageProps.toggle}
        /> */}
      </ButtonWrapper>
    </Container>
  )
}

export default Home
