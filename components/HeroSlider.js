import { Fade } from "react-slideshow-image"
import Link from "next/link"

const images = [
  {
    src: "https://i.ibb.co/M1JJCB0/desktop-basics-hero.jpg",
    srcSet: " https://i.ibb.co/m6smpW0/mobile-basics-hero.jpg",
    href: "/shop/cofta-furniture" 
  },
  {
    src: "https://i.ibb.co/3rWpTzT/desktop-jasmine-hero.jpg",
    srcSet: "https://i.ibb.co/NZ5Jxx0/mobile-jasmine-hero.jpg",
    href: "/shop/cofta-furniture/cofta-gf-jasmine"  
  },
  {
    src: "https://i.ibb.co/JthrFMk/desktop-pcseries-hero.jpg",
    srcSet: "https://i.ibb.co/hRMvT8r/mobile-pcseries-hero.jpg",
    href: "/shop/cofta-furniture" 
  }
]

const HeroSlider = () => {

  return (
    <div>
      <div className="slide-container mt-5">
        <Fade duration={4500} >
          { 
            images.map(item => (
              <Link href={item.href} key={item}>
                <a>
                  <div className="each-slide">
                    <picture>
                      <source media="(max-width: 800px)" srcSet={item.srcSet} />
                      <img src={item.src} alt="slide show" />
                    </picture>
                  </div>
                </a>
              </Link>
            ))
          }
        </Fade>
      </div>
    </div>
  )
}


export default HeroSlider;