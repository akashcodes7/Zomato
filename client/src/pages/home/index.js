import React from 'react'
import Header from '../../components/common/header/Header'
import Index from '../../components/common/tabOptions/index'
import Footer from '../../components/common/footer/Footer'
const getCorrectScreen=()=>{

}

const Home = () => {
    return (
        <div>
            <Header />
            <Index />
            {getCorrectScreen()}
            <Footer />
        </div>
    )
}


export default Home
