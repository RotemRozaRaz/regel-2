import Carousel from 'react-bootstrap/Carousel';

var CarouselData = [
    {
        id: 1,
        image: require('../assets/images/5-top-products.png'),
        title: 'מוצרים שאסור לפספס',
        description: 'This is a description of the first slide.',
        link: ''
    },
    {
        id: 2,
        image: require('../assets/images/top-sellers.png'),
        title: 'חמשת המוכרים המדורגים ביותר באתר',
        description: 'This is a description of the second slide.',
        link: ''
    },
    {
        id: 3,
        image: require('../assets/images/products-for-summer.png'),
        title: 'המוצרים החמים ביותר שלנו',
        description: 'This is a description of the third slide.',
        link: ''
    }
]


export default function AppHero() {

    return (
        <section id="home" className='hero-block'>
            <Carousel>
                {
                    CarouselData.map(item => (
                        <Carousel.Item key={item.id}>
                            <img
                                className='d-block w-100'
                                src={item.image}
                                alt={"Slide " + item.id}
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </section>
    )
}