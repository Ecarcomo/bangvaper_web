//=========Import Globales==========
import React from 'react';

//=========Import Locales==========
import '../styles/footer.css';


export const   Footer = () =>{

        const objStyle ={
                'display':'inline-flex',
                'align-items': 'center',
        };
        

        return(
                <footer>
                        <section id='info_footer'>
                                <div>
                                        <h5>Informacion importante</h5>
                                        <ul>
                                                <li>Quienes Somos</li>
                                                <li>Como Comprar</li>
                                                <li>Envios CABA/AMBA</li>
                                                <li>Devoluciones</li>
                                        </ul>
                                </div>
                                <div>
                                        <h5>Redes Sociales</h5>
                                        <cwnter>
                                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/600px-Instagram-Icon.png' width='50px' />
                                                <br></br>
                                        </cwnter>
                                        <a href='#'>Instagram:  <strong>@BangVaper</strong></a>
                                </div>
                                <div>
                                        <h5>Pagos USDT</h5>
                                        <img src='https://i.ibb.co/QPcwYsR/pngegg.png' width='300px'/>
                                        <p>lorem dasdas dsadsa dadsa dsadsa</p>
                                </div>
                        </section>
                        <div> Sitio Web Desarrollado por @DevAds</div>
                       
                </footer>
        );

}