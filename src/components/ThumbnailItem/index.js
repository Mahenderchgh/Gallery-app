// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const activaImageclassName = isActive ? 'active-image' : 'image'

  const onClickItem = () => {
    clickImage(id)
  }

  return (
    <li className="list-container">
      <button className="button" type="button" onClick={onClickItem}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activaImageclassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
