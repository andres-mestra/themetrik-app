import { EaseCurveControlPoints, StatsReport, City } from 'iconoir-react'
import Link from 'next/link'

export const ServicesSection = () => {
  return (
    <section id="services" className="container services__section">
      <h2 className="services__title">Our Services</h2>
      <div className="services__container">
        <div className="service__card">
          <StatsReport fontSize={30} />
          <h2 className="service__title">Concept revision</h2>
          <p className="service__description">
            After the design stage, we discuss with the client about the concept
            that has been made or evaluate and validate
          </p>
          <Link href="#">
            <a className="service__link link__text">READ MORE</a>
          </Link>
        </div>
        <div className="service__card">
          <EaseCurveControlPoints fontSize={30} />
          <h2 className="service__title">Concept revision</h2>
          <p className="service__description">
            After the design stage, we discuss with the client about the concept
            that has been made or evaluate and validate
          </p>
          <Link href="#">
            <a className="service__link link__text">READ MORE</a>
          </Link>
        </div>
        <div className="service__card">
          <City fontSize={30} />
          <h2 className="service__title">Concept revision</h2>
          <p className="service__description">
            After the design stage, we discuss with the client about the concept
            that has been made or evaluate and validate
          </p>
          <Link href="#">
            <a className="service__link link__text">READ MORE</a>
          </Link>
        </div>
      </div>
    </section>
  )
}
