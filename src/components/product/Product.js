import React from 'react'
import { Link } from 'react-router-dom'

const Product = ( {product} ) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
            <img
                className="card-img-top"
                src={product.images[0].url} 
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                    <Link to={`/product/${product._id}`}> {product.name} </Link>
                </h5>
                <div className="ratings mt-auto">
                    <div className="rating-outer">
                        <div className="rating-inner" style={{ width:`${(product.ratings / 5) * 100}%`}}></div>
                    </div>
                    <span id="no_of_reviews">({product.numOfReviews} reviews)</span>
                </div>
                <p className="card-text">Rs. {product.price}</p>
                <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block"> View Details </Link>
            </div>
        </div>
    </div>
  )
}

export default Product

