import { Container } from './ImageUploader.style'

export const ImageUploader: React.FC = () => {
  return (
    <Container>
      <span>Imagem</span>
      <label htmlFor="image-uploader"></label>
      <input id="image-uploader" type="file" accept=".jpg,.png" hidden></input>
    </Container>
  )
}
