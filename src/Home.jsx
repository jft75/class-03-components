import './Home.css'
import galaxyImage from '/images/galaxy.webp'

export default function Home() {
  return (
    <main>
      <div className="gallery">
        <div className="card">
          <img className="image" src={galaxyImage} alt="an AI generated galaxy" />

          <p className="description">
            Source: <cite>Microsoft Copilot</cite>
          </p>
        </div>
      </div>

      <h2>Rendered Date</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
