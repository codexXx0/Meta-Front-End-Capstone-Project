import './Home.css'
import Header from './Header'
import MenuItem from './MenuItem'
import Testimonials from './Testimonials'
import articleImg from '../assets/restauranfood.jpg'
import greekImg from '../assets/greek salad.jpg'
import bruImg from '../assets/bruchetta.svg'
import lemonImg from '../assets/lemon dessert.jpg'
import about1Img from '../assets/Mario and Adrian A.jpg'
import about2Img from '../assets/Mario and Adrian B.jpg'

export default function Home() {
    return (
        <>
        <Header/>
        <main>
            <div className="smallCon">
                <section className='topSection' >
                    <article className="left" >
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button>Reserve a table</button>
                    </article>
                    <article className="right" >
                        <img src={articleImg} alt="" />
                    </article>
                </section>
            </div>
            <section className='specialSection' >
                <article className='top' >
                    <h3>This week specials!</h3>
                    <button>Online Menu</button>
                </article>
                <article className='menu' >
                    <MenuItem
                        image={greekImg}
                        title={'Greek Salad'}
                        price={'$12.99'}
                        des={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}
                    />
                    <MenuItem
                        image={bruImg}
                        title={'Bruschetta'}
                        price={'$5.99'}
                        des={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."}
                    />
                    <MenuItem
                        image={lemonImg}
                        title={'Lemon Dessert'}
                        price={'$5.00'}
                        des={"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                    />
                </article>
            </section>
            <div className="smallCon">
                <Testimonials/>
            </div>
            <section className='aboutUs' >
                <article className='left' >
                    <h3>Little Lemon</h3>
                    <h4>Chicago</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </article>
                <article className='right' >
                    <img src={about1Img} alt="" />
                    <img src={about2Img} alt="" />
                </article>
            </section>
        </main>
        </>
    )
}