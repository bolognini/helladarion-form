import { Container } from './ImageUploader.style'
import { useImageUploader } from './ImageUploader.hooks'

export const ImageUploader: React.FC = () => {
  const { onSaveImage, imageSource } = useImageUploader()

  return (
    <Container>
      <span>Imagem</span>
      <label htmlFor="image-uploader">
        <img src={imageSource} />
      </label>
      <input
        id="image-uploader"
        type="file"
        accept=".jpg,.jpeg,.png"
        hidden
        onChange={e => onSaveImage({ file: e.target.files[0] })}
      ></input>
    </Container>
  )
}
