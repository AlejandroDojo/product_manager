import Product from '../components/Product/Product';

const Component = ({collectionItems, deleteItem}) => {

    return (
        <div> 
            <ul>
                {(collectionItems) 
                ? collectionItems.map((item, key) => {
                    return <li key={key}> <Product title={item.title} price= {item.price} description={item.description} id={item._id} deleteItem={deleteItem}/>
                    </li>
                })
                : ""
                }
            </ul>
            
        </div>
        );
};

export default Component;