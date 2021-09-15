import Head from "next/head"
import ProductsList from "../components/ProductsList"
import { Fade } from "react-slideshow-image"

const images = [
  "https://i.ibb.co/M1JJCB0/desktop-basics-hero.jpg",
  "https://i.ibb.co/3rWpTzT/desktop-jasmine-hero.jpg",
  "https://i.ibb.co/JthrFMk/desktop-pcseries-hero.jpg" 
]

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Staffstore Inc</title>
      </Head>

      <div className="slide-container mt-5">
        <Fade
          duration={4500}
        >

          { 
            images.map(item => (
              <div className="each-slide" key={item}>
                <img 
                  src={item}
                  alt="slide show"
                />
              </div>
            ))
          }

        </Fade>
      </div>

    </div>
  )
}


export default HomePage
