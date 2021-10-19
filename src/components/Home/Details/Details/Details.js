import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    return (
        <div>
            <h1>this:{serviceId}</h1>
            <h1>{services.name}</h1>
        </div>
    );
};

export default Details;