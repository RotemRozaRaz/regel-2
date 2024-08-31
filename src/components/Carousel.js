import Carousel from 'react-bootstrap/Carousel';

var CarouselData = [
    {
        id: 1,
        image: require('../assets/images/5-top-products.png'),
        title: 'מוצרים שאסור לפספס',
        description: 'חמשת המוצרים הכי נמכרים שלנו',
        link: 'http://localhost:3001'
    },
    {
        id: 2,
        image: require('../assets/images/top-sellers.png'),
        title: 'חמשת המוכרים המדורגים ביותר באתר',
        description: 'המוכרים הכי טובים נמצאים אצלנו באתר! מוזמנים לבקר בעמודים שלהם ולדרג אותם',
        link: 'http://localhost:3001'
    },
    {
        id: 3,
        image: require('../assets/images/products-for-summer.png'),
        title: 'המוצרים החמים ביותר שלנו',
        description: 'כשנהיה חם קונים חכם! מוזמנים להסתכל על המוצרים הנמכרים ביותר שלנו הקיץ',
        link: 'http://localhost:3001'
    }
]


export default function AppCarousel() {

    return (
        <section id="home" className='hero-block'>
            <Carousel>
                {
                    CarouselData.map(item => (
                        <Carousel.Item key={item.id}>
                            <img
                                className='img-fluid'
                                src={item.image}
                                alt={"Slide " + item.id}
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href={item.link} className='btn btn-primary'>לקריאה עוד <i class = "fas fa-chevron-left"></i></a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </section>
    )
}