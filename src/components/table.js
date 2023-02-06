import React from 'react';
import Sampledata from "./sample.json"
import './table.css'
const AboutUs = () => {
    //console.log(Sampledata)
    return (
        <div>
            <h1>Table</h1>
            
            <table className="table">
  <thead className='head1'>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Latitude</th>
      <th scope="col">Longitude</th>
    </tr>
  </thead>
  <tbody className='body1'>
    {
            Sampledata.map( (record) => {
                let id=record.id;
                let city =record.city;
                let la = record.lati ;
                let lo = record.lon;
                return (<tr key={id}>{id}<td>{city}</td><td>{la}</td><td>{lo}</td></tr>);
            })
            }

    </tbody></table>
            
        </div>
    );
};

export default AboutUs;