import { useParams } from 'react-router-dom';
import Product from '../components/Product/Product';

const DetailProduct = ({collectionItems}) => {

    const param = useParams();

    const foundItem = collectionItems.find((e) => e._id === param.id);
    return (
        <> 
            <h1>This is the detail of the product</h1>
            {(foundItem) 
            ? <Product title={foundItem.title} description={foundItem.description} price={foundItem.price}/>
            : ""}
        </>
        );
};

export default DetailProduct;