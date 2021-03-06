import React from 'react'

const Card = () => {
    return (
        <>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="image-container">
                                <div class="first">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="discount">-25%</span>
                                        <span class="wishlist"><i class="fa fa-heart-o"></i></span>
                                    </div>
                                </div>
                                <img src="https://i.imgur.com/PtepOpe.jpg" class="img-fluid rounded thumbnail-image" />
                            </div>
                            <div class="product-detail-container p-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5 class="dress-name">Long sleeve denim jacket</h5>
                                    <div class="d-flex flex-column mb-2">
                                        <span class="new-price">$3.99</span>
                                        <small class="old-price text-right">$5.99</small>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-1">
                                    <div class="color-select d-flex ">
                                        <input type="button" name="grey" class="btn creme" />
                                        <input type="button" name="darkblue" class="btn darkblue ml-2" />
                                    </div>
                                    <div class="d-flex ">
                                        <span class="item-size mr-2 btn" type="button">S</span>
                                        <span class="item-size mr-2 btn" type="button">M</span>
                                        <span class="item-size btn" type="button">L</span>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                        <i class="fa fa-star-o rating-star"></i>
                                        <span class="rating-number">4.8</span>
                                    </div>
                                    <span class="buy">BUY +</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card