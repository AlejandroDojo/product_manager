import axios from "axios";
const DeleteProduct = ({deleteItem, id}) => {

    const deletePerson = () => {
        if (id) {
            axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(res => {
                deleteItem(id)
                console.log("The product with id "+id+" has been deleted.")
            })
            .catch((err) => console.log(err))
        }
        
    }

    return (
            <button onClick={deletePerson}>
                Delete
            </button>
        );
};

export default DeleteProduct;