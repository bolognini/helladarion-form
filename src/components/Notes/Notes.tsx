import { useSelector } from 'react-redux'
import { Container } from './Notes.style'
import { TextArea } from 'components/TextArea/TextArea'

export const Notes: React.FC = () => {
  const {
    loot: { lootLabel, notesLabel }
  } = useSelector(({ language }) => language)
  return (
    <Container>
      <TextArea id="treasury" size="small" label={lootLabel} />
      <TextArea id="notes" size="small" label={notesLabel} />
    </Container>
  )
}
