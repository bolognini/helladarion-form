import { useRouter } from 'next/router'
import { Button } from 'components/Button/Button'
import { useForm } from 'hooks/pages/useForm'
import { Stepper } from 'components/Stepper/Stepper'
import { ThemeButton } from 'components/ThemeButton/ThemeButton'
import { ResponsiveFallback } from 'components/ResponsiveFallback/ResponsiveFallback'
import { Container, ButtonWrapper } from 'styles/pages/Form.style'
interface IForm {
  value: boolean
  toggle: () => void
}

const Form: React.FC<IForm> = pageProps => {
  const router = useRouter()
  const {
    currentStep,
    setCurrentStep,
    backButtonLabel,
    nextButtonLabel,
    onSendData
  } = useForm()
  return (
    <section>
      <ResponsiveFallback />
      <Container suppressHydrationWarning>
        <Stepper theme={pageProps.value} currentStep={currentStep} />
        <ButtonWrapper>
          <Button
            secondary
            onClick={() => {
              currentStep > 0
                ? setCurrentStep(currentStep - 1)
                : router.push('/')
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
          <ThemeButton value={pageProps.value} toggle={pageProps.toggle} />
        </ButtonWrapper>
      </Container>
    </section>
  )
}

export default Form
