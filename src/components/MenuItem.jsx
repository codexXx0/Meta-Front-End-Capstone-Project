import './MenuItem.css'
/* eslint-disable react/prop-types */
export default function MenuItem({ image , title , price , des  }) {
    return (
        <div className="item">
            <div className="topItem">
                <img src={image} alt="" />
            </div>
            <div className="midItem">
                <h4>
                    {title}
                    <span className='price' >{price}</span>
                </h4>
                <p> {des} </p>
            </div>
            <div className="bottomItem">
                <button>Order a delivery</button>
            </div>
        </div>
    )
}