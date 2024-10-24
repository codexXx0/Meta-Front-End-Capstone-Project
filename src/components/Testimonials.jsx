import './Testimonials.css'
import People from "./People"
import cusImg1 from '../assets/customer1.jpg'
import cusImg2 from '../assets/customer2.jpg'
import cusImg3 from '../assets/customer3.jpg'
import cusImg4 from '../assets/customer4.jpg'

export default function Testimonials() {
    return (
        <section className='testimonials' >
            <h3>What people say about us!</h3>
            <article className='peoples' >
            <People
                image={cusImg1}
                name={'Maria Sanchez'}
                par={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            />
            <People
                image={cusImg2}
                name={'Antony Clifton'}
                par={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            />
            <People
                image={cusImg3}
                name={'Tamika Jackson'}
                par={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            />
            <People
                image={cusImg4}
                name={'Brandon Ming'}
                par={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            />
            </article>
        </section>
    )
}