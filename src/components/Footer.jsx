import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

export class Footer extends React.Component{
  render(){
    return (
      <footer className="footer bg-dark text-center text-white ">
        <section>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><FaFacebook/></a>
          
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><FaTwitter/></a>
          
          <a className="btn
          btn-outline-light btn-floating m-1" href="#!" role="button"
            ><FaInstagram/></a>
    
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><FaLinkedinIn/></a>
      
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><FaGithub/></a>
        </section>
        <div className="text-center p-3">
          © 2021 Copyright:
          <a className="text-white" href="#!">Song_Translator</a>
        </div>
    </footer>
    );
  }
}
