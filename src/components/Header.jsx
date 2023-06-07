//=========Import Globales==========
import React from 'react';

//=========Import Locales==========
import '../styles/header.css';


export const   Header = ({images}) =>{

        const objStyle ={
                'display':'inline-flex',
                'align-items': 'center',
        };
        

        return(
                <header>
                <nav className="navbar navbar-dark bg-dark">
                        <a className="navbar-brand" href="#" style={objStyle}>
                                {images.map(image =>
                                       {switch(image.id){
                                                case 1:
                                                        return<img src={image.imageUrl} width='300px' height='100px' />
                                        }}
                                )}
                        </a>
                        {images.map(image =>
                                {switch(image.id){
                                        case 2:
                                                return<img src={image.imageUrl} width='600px' height='100px' />
                                }}
                        )}
                </nav>
                <div className='alert alert-dark'>
                                fsafs fsafsa fsaf safsa fs a fsa fsaf sa fs 
                </div>

                {images.map(image =>
                        {switch(image.id){
                                case 3:
                                        return  <section className='slide' style={{'background-image':'url('+image.imageUrl+')'}} >
                                                        <h4>Vapeadores Electrónicos Importados</h4>
                                                        <p>wfwee gewgew gwegew gewgew gewgew gewgew gew gew gewgew gewgew</p>
                                                </section>
                        }}
                )}
               
                </header>
        );

}