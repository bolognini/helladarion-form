import {
  TransitionGroup,
  Transition as ReactTransition
} from 'react-transition-group'

const timeout = 200

const transitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
    transform: 'translateX(30px)'
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
    opacity: 1,
    transform: 'translateX(0px)'
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
    opacity: 0,
    transform: 'translateX(-30px)'
  }
}

export const Transition: React.FC<{
  transitionKey: string | number
}> = ({ children, transitionKey }) => {
  return (
    <TransitionGroup style={{ position: 'relative' }}>
      <ReactTransition
        key={transitionKey}
        timeout={{
          enter: timeout,
          exit: timeout
        }}
      >
        {status => (
          <div
            style={{
              width: '960px',
              margin: '0 auto',
              ...transitionStyles[status]
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}
