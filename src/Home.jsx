import './Home.css'
import GalleryCard from './components/GalleryCard'

export default function Home() {
  return (
    <main>
      <div className="gallery">
        <GalleryCard/>
      </div>
      
      <h2>Rendered Date</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
