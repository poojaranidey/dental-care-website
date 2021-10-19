import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.JSON')
            .then(res => res.json())
            .then((data) => setServices(data.find(x => x.id === +serviceId)))

    }, []);
    console.log(services);
    // const { name, image, description, price } = services[0] || {};
    return (
        <div>

            <h1>{services.name}</h1>
            <img className="my-5" src={services.image} alt="" />
            <h5 className="mx-5 px-5 ">Details :{services.details}</h5>
            <h3>Total cost :{services.price}</h3>

        </div>
    );
};

export default Details;