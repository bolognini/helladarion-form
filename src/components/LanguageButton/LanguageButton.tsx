import { Container } from './LanguageButton.style'

interface ILanguageButton {
  changeLanguage: (string) => void
}

export const LanguageButton: React.FC<ILanguageButton> = ({
  changeLanguage
}) => (
  <Container>
    <button type="button" onClick={() => changeLanguage('ENGLISH')}>
      EN
    </button>
    <span> / </span>
    <button type="button" onClick={() => changeLanguage('PORTUGUESE')}>
      PT-BR
    </button>
  </Container>
)
