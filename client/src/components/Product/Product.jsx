import { Link } from "react-router-dom";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
const Product = ({title, price, description, id, deleteItem}) => {
    return (
        <div>
            {(id) ? 
            <div>
                <h2>
                    <Link to={`/${id}`}>{title}</Link> 
                    <span>${price}</span></h2>
                <p>{description}</p>
                <Link to={`/update/${id}`}>
                    <button>Modify</button>
                </Link>
                <DeleteProduct deleteItem={deleteItem} id={id}/>
                
            </div>
            : 
            <div>
                <h2>{title} <span>${price}</span></h2>
                <p>{description}</p>
            </div>
        }
            
        </div>
        );
};

export default Product;