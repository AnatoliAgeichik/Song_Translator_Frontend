import React from 'react';

export class Header extends React.Component{
render(){
return(
  <nav class="navbar navbar-expand-lg navbar-light bg-dark p-3">
  
  <a class="navbar-brand text-white" href="#">SongTranslator</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
      <li class="nav-item active ">
        <a class="nav-link text-white" href="#">Singers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Tracks</a>
      </li>
    </ul>
    
  </div>
</nav>
);
}
}