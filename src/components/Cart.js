import './Cart.css'
export default function Cart({title,completed}) {
    return(
        <div className={`cart ${completed?'cart-com':''}`}>
            <h2>{title}</h2>
            <button>x</button>
        </div>
    )
};
