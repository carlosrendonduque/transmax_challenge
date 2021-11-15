
import cloudy from '../assets/cloudy.png'

const WeatherInfo = () => (
	<section className=" p2 weather-info-container">
    <header className="flx flx-hc">
      <figcaption className="f3 flxy flx-hc">
        <span>Melbourne</span>
        <h1>32°</h1>
        <span>Tue 16th 3:46 PM</span>
      </figcaption>
      <figure className="weather-img"><img src={cloudy} alt="cloudy" /></figure>
    </header>
    <article className="weather-info flx flx-j_sb "> 

     <ul className="weather-infolist">
       <li>Humidity</li>
       <li>Chance of Rain</li>
       <li>Wind</li>
       <li>Tomorrow</li>
     </ul> 
      <ul className="weather-infolist">
       <li><b>78%</b></li>
       <li><b>34%</b></li>
       <li><b>21</b> kmh</li>
       <li><b>30° </b></li>
     </ul> 
    </article>
  </section>
)


export default WeatherInfo