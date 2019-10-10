import React,{useState} from 'react';
import axios from 'axios';
import Error from './Error';
import Swal from 'sweetalert2'

const AddProducts = () => {

    const [namePLate,setNamePLate] = useState('');
    const [coustPLate,setCoustPLate] = useState('');
    const [category,setcategory] = useState('');
    const [error, setError] = useState(false);

    const handleRadio = e => {
        setcategory(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(namePLate === '' || coustPLate === '' || category === '') {
            setError(true);
            return;
        }

        setError(false);
        const url =`http://localhost:4000/restaurant`
        axios.post(url,{
            namePLate,
            coustPLate,
            category
        }).then(response =>{
            if(response.status === 201 ) {
                Swal.fire(
                    'Good job!',
                    'The product was cretate!',
                    'success'
                  )
            }
        })
        .catch(error => console.log(error));

    }

    return ( 
        <div className="col-md-8 mx-auto ">
        <h1 className="text-center">Add new products</h1>

        {(error) ? <Error  message={'You need fill all the fields'} /> : null }

        <form
            className="mt-5"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label>Name of the Plate</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    placeholder="Name Plate"
                    onChange={e => setNamePLate(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Price of the Plate</label>
                <input 
                    type="number" 
                    className="form-control" 
                    name="price"
                    placeholder="Price PLate"
                    onChange={e => setCoustPLate(e.target.value)}
                />
            </div>

            <legend className="text-center">Categoría:</legend>
            <div className="text-center">
            <div className="form-check form-check-inline">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="categorie"
                    value="dessert"
                    onChange={handleRadio}
                />
                <label className="form-check-label">
                    Dessert
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="categorie"
                    value="drink"
                    onChange={handleRadio}
                />
                <label className="form-check-label">
                    Drink
                </label>
            </div>

            <div className="form-check form-check-inline">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="categorie"
                    value="cuts"
                    onChange={handleRadio}
                />
                <label className="form-check-label">
                    Cuts
                </label>
            </div>

            <div className="form-check form-check-inline">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="categorie"
                    value="saled"
                    onChange={handleRadio}
                />
                <label className="form-check-label">
                    Saled
                </label>
            </div>
            </div>

            <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Producto" />
        </form>
    </div>
     );
}
 
export default AddProducts;