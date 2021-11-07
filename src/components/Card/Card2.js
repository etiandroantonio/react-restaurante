import React from 'react'
import './card.css'


function Card2({data}) {
    return (
        <>
        <section className="cards">
        <h1>Escolha sua Sobremesa</h1>
         <div className="cards__wrapper">
                {data.map((products,index)=>{
                    console.log(products)
                    return(
                <div key={index} className="card">
                    <div className="card__container">
                        <img className="card-img" src={products.img} alt="pizza suprema" />
                            <div className="card-body">
                                <h3 className="card-title">{products.title}</h3>
                                <h4 className="card-text">{products.text}</h4>
                                <h4 className="card-price">{products.price}</h4>
                                <button>adcionar ao carrinho</button>
                            </div>

                    </div>
                </div>
                
                    )

                })}
        
        </div>
        </section>
        
            
        </>
    )
}

export default Card2
