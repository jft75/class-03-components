import galaxyImage from '/images/galaxy.webp'

export default function GalleryCard() {
  return (
    <div className="card">
      <img className="image" src={galaxyImage} alt="an AI generated galaxy" />

      <p className="description">
        Source: <cite>Microsoft Copilot</cite>
      </p>
    </div>
  )
}
