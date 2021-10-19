import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.JSON')
            .then(res => res.json())
            .then((data) => setServices(data.find(x => x.id === +serviceId)))

        // .then((data) => {
        //     const detailService = data.filter((service) => service.id === +serviceId);
        //     setServices(detailService);

        // })

    }, []);
    console.log(services);
    const { name, image, description, price } = services[0] || {};
    return (
        <div>

            <h1>{services.name}</h1>
            <img src={services.image} alt="" srcset="" />
            <h4>Details :{services.details}</h4>
            <h3>Total cost :{services.price}</h3>

        </div>
    );
};

export default Details;