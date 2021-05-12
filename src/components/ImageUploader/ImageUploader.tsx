import { Container, Image } from './ImageUploader.style'
import { useImageUploader } from './ImageUploader.hooks'

export const ImageUploader: React.FC<{ theme: boolean }> = ({ theme }) => {
  const { onSaveImage, imageSource, themeUploader } = useImageUploader({
    theme
  })

  return (
    <Container>
      <span>Imagem</span>
      <label htmlFor="image-uploader">
        <Image src={imageSource || themeUploader} defaultImage={!imageSource} />
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
