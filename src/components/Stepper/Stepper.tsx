import Head from 'next/head'
import { useStepper } from './Stepper.hooks'

export const Stepper: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  const { step } = useStepper()
  return (
    <div>
      <Head>
        <title>{`Helladarion: ${step[currentStep].title}`}</title>
      </Head>
      <h1>{step[currentStep].title}</h1>
      <p>{step[currentStep].description}</p>
      <div>{step[currentStep].component}</div>
    </div>
  )
}
