import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Card = ({item}) => {
    const {_id, name, quantity, supplier, taste, category, details, photo } = item;

    const deleteHandle =(_id) =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            

            fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if (data.deleteCount > 0) {
                     Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              ) 
                }
            })
            }
          })

    }

    return (
        <div className="card card-side bg-base-100 shadow-xl border-2">
        <figure><img src={photo} alt="Movie" className="h-96 w-92"/></figure>
        <div className="flex justify-between w-full pr-4">
            <div className="ml-10 mt-10">
                <h2 className="card-title">Name: {name}</h2>
                <p className="mt-4">Qty: {quantity}</p>
                <p className="mt-4">Suplier: {supplier}</p>
                <p className="mt-4">Taste: {taste}</p>
            </div>
            <div className="card-actions justify-end">
                <div className="btn-group btn-group-vertical space-y-4">
                    <button className="btn">View</button>
                    <Link>
                    <button className="btn">Edit</button>
                    </Link>
                    <button onClick={() =>deleteHandle(_id)} className="btn bg-orange-500">X</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Card;