// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import Card from '../UI/Card/Card';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const Product = ({ product, selected }) => {
    const navigate = useNavigate();
    return (
        <Card width='200px'>
            <h3>title: {product.title}</h3>
            <h4>discription: {product.discription}</h4>
            <label>delete: </label>
            <input type="checkbox" onClick={(event) => selected(event, product.id)} />
            <Button style={{display: 'block',height:'24px', margin: '5px auto'}} onClick={() => navigate(`edit/${product.id}`)}>edit</Button>
        </Card>
    )
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default Product;
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //