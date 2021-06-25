import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
                alt="" />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="123123123"
                    title="Tiger X"
                    price={1255}
                    rating={5}
                    image="https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/2/2019/08/1eb69d3b587a38510ea01df7a3bd1c5c.jpg"
                />
                <Product
                    id="123123124"
                    title="BEASTCOM Q3 Computer"
                    price={1255}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71E7k8IFkaL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="123123125"
                    title="Acer Nitro 5 "
                    price={1089}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/819zO%2BbjMDS._AC_SL1500_.jpg"
                />
                <Product
                    id="123123126"
                    title="Huawei MateBook D 14"
                    price={749}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Tj4tIwlmL._AC_SL1500_.jpg"
                />
                 <Product
                    id="123123133"
                    title="Microsoft Surface Laptop 4"
                    price={987}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Ytl2Qm2nL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
            <Product
                    id="123143123"
                    title="Lenovo Yoga C740 "
                    price={1299}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51uoYcPMUvS._AC_SL1000_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
