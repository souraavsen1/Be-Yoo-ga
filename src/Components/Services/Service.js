import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css"

const Service = (props) => {
    const { id,service_name, img, description, days, fees, type } = props.service
    
  return (
    <div className='mx-auto'>
      <Card className='w-80 mx-auto shadow-md rounded-bl-3xl'>
        <Card.Img className='card_img' variant='top' src={img} />
        <Card.Body className='flex flex-col items-center'>
          <Card.Title>{service_name}</Card.Title>
          <Card.Text className='text-justify h-28'>
            {description.slice(0, 140)} ...
          </Card.Text>
          <p className='text-red-500'>{days}</p>
          <p className='font-semibold text-red-500'>${fees}/Month</p>
          <p className='text-red-500'>{type}</p>
          <Link
            to={`/services-details/${id}`}
            className='my-6 px-4 rounded-full py-1 bg-red-400 text-white font-semibold'
          >
            Explore
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
