import f1_png from '../assets/f1.png'
import stock_png from '../assets/Stock.png'
import movie_png from '../assets/movie.png'


const HobbyList = [
  {label : "F1", src : f1_png, alt : "F1", className : "hobby-img f1"},
  {label : "주식", src : stock_png, alt : "주식", className : "hobby-img stock"},
  {label : "영화 보기", src : movie_png, alt : "영화 보기", className : "hobby-img movie"}
]

function Hobby() {
  return( 
    <section id="hobby">
      <h2 className="section-title">HOBBY</h2>
      <div className="hobby-grid">
      {
        HobbyList.map(({label, src, alt, className}) => (
            <div className='hobby-card' key = {label}>
              <div className = "hobby-label">{label}</div>
              <img src = {src} alt={alt} className={className}/>
            </div>
        ))}  
    </div>
  </section>
  )
}

export default Hobby