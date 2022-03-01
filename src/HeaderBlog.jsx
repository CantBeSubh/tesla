import React from 'react'
import './HeaderBlog.css'

function HeaderBlog() {
  return (
    <div className='headerBlog'>
        <div className="headerBlog__info">
            <div className="headerBlog__info--text">
                <h1>Model 3</h1>
                <h4>Order online for <span>Touchless Delivery</span></h4>
            </div>
            <div className="headerBlog__actions">
                <button className="headerBlog__btn--primary">Custom order</button>
                <button className="headerBlog__btn--secondary">Existing delivery</button>
            </div>
        </div>
    </div>
  )
}

export default HeaderBlog