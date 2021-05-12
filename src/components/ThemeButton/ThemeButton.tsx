import { Container } from './ThemeButton.style'

interface IThemeButton {
  value: boolean
  toggle: () => void
}

export const ThemeButton: React.FC<IThemeButton> = ({ value, toggle }) => (
  <Container value={value}>
    <label htmlFor="theme">
      <img
        src={value ? '/sun.svg' : '/moon.svg'}
        alt={`An image of a ${value ? 'sun' : 'moon'}`}
      />
    </label>
    <input id="theme" checked={value} type="checkbox" onChange={toggle} />
  </Container>
)
