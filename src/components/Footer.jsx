import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

export class Footer extends React.Component{
  render(){
    return (
      <footer class="footer bg-dark text-center text-white ">
        <section>
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><FaFacebook/></a>
          
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><FaTwitter/></a>
          
          <a class="btn 
          btn-outline-light btn-floating m-1" href="#!" role="button"
            ><FaInstagram/></a>
    
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><FaLinkedinIn/></a>
      
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
            ><FaGithub/></a>
        </section>
        <div class="text-center p-3">
          © 2021 Copyright:
          <a class="text-white" href="#">Song_Translator</a>
        </div>
    </footer>
    );
  }
}
