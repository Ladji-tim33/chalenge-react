import '../App.css';
import React, { useState } from 'react';


const Mylist = ({ utilisateurs, handleDelete }) => {
    const [MyDate, setDate] = useState({
        date: new Date()
      });

    const  componentDidMount = () =>{
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    const componentwilUnmount = () =>{
        window.clearInterval(this.timer)
    }

      const tick = () =>{
        setDate({date: new Date()})
    }

    return (
        <div  className="container-fluid">
            <div className="row">
            {utilisateurs.map((tabmap) =>  ( 
                <div key={tabmap.id} className="col-md-3 mb-3">
                    <div class="border-bottom  p-3 myCard " >
                        
                        <div class="card-body  d-flex justify-content-between">
                           <div>
                           <h5 class="card-title mb-2">{tabmap.text}</h5>
                            <p class="card-text">{ MyDate.date.toLocaleDateString()} </p>
                           </div>
                            <div className="d-flex">
                                <p className="text-primary" ><i class="bi bi-pencil-fill me-2 "></i></p>
                                <p className="text-danger" onClick={() => handleDelete(tabmap.id)}><i class="bi bi-trash"></i> </p>                               
                            </div>
                        </div>
                    </div>

                </div>

            ))}
            </div>

        </div>
    );

}

export default Mylist;
