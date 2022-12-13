// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
import { useParams } from 'react-router-dom';
import { useLoading } from '../../hooks/useLoading';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
const EditProduct = () => {
    const { id } = useParams();
    useLoading();
    console.log(id);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
export default EditProduct;