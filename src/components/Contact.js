import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import People from './People';
import './Contact.css'

const Contact = () => {

  const [searchParams]=useSearchParams({name:"nik"})
  let id=searchParams.get("id");
  return (
    <div>
      <div className="content">Contact</div>
      <div className="people">
        <Link to="?id=elon">Elon Musk</Link>
        <Link to="?id=jeff">Jeff Bezos</Link>
        <Link to="?id=nikhil">Nikhil Jose</Link>
      </div>
      {id?<People name={id}/>:""}
    </div>
  );
}

export default Contact