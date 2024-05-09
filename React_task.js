import React from 'react'
import logo from './Image/logo.jpg'
import bg from './Image/divbg2.gif'
import './React_task.css'
import bg1 from './Image/background.jpg'
import bg2 from './Image/logo2.jpg'
import bg3 from './Image/wedding.jpg'
import bg4 from './Image/holi.jpg'
import bg5 from './Image/3d.jpg'
import bg6 from './Image/2D.jpg'
import bg7 from './Image/birthday.jpeg'
import bg8 from './Image/trailer.jpg'
function React_task() {
  return (
    <div>
      <div class="navbar">
        <div class="icon">
          <img className='img1' src={logo} alt="logo" />
          <p class="logo">Design</p><p className='slogo'>Template</p>
          <select name='Template' class="select">
                <option>Template</option>
                <option>Template</option>
                <option>Template</option>
            </select>
            <select name='Illustration' class="select">
                <option>Illustration</option>
                <option>Illustration</option>
                <option>Illustration</option>
            </select>
            <select name='Motion graphics' class="select">
                <option>Motion graphics</option>
                <option>Motion graphics</option>
                <option>Motion graphics</option>
            </select>
            <select name='Free template' class="select">
                <option>Free template</option>
                <option>Free template</option>
                <option>Free template</option>
            </select>
                <input class="srch" type="search" name="" placeholder="Search"/>
                 <button class="btn1">Search</button>
                 <button class="btn2">Login</button>
        </div>
      </div>
      <div className='div2'>
       <img className='img2' src={bg} alt="divbg2"/>
       <h1 className='para1'>Spark  Endless  Creation  with</h1><br/><br/>
          <h1 className='para2'> Premium Design Assets</h1><br/>
          <h5 className='para3'>Unlock the World's Leading Royalty-Free Design Collection</h5>
          <input class="search" type="search" name="" placeholder="Search"/>
          <button class="button">Search</button>
      </div>
      <div className='divmain'>
      <div className='div3'>
      <img className='img3'src={bg1} alt="background"/>
      <p className='para4'>Background</p>
      </div>
      <div className='div31'>
      <img className='img4'src={bg2} alt="logo2"/>
      <p className='para4'>Logo</p>
      </div>
      <div className='div32'>
      <img className='img5'src={bg3} alt="wedding"/>
      <p className='para4'>Wedding</p>
      </div>
      <div className='div33'>
      <img className='img6'src={bg4} alt="holi"/>
      <p className='para4'>Holi</p>
      </div>
      <div className='div34'>
      <img className='img7'src={bg5} alt="3d"/>
      <p className='para4'>3D</p>
      </div>
      <div className='div35'>
      <img className='img8'src={bg6} alt="2D"/>
      <p className='para4'>2D</p>
      </div>
      <div className='div36'>
      <img className='img9'src={bg7} alt="birthday"/>
      <p className='para4'>Birthday</p>
      </div>
      <div className='div37'>
      <img className='img10'src={bg8} alt="trailer"/>
      <p className='para4'>Trailer</p>
      </div>
      </div>
      </div>
  )
}

export default React_task