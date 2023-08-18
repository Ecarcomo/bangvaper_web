//=========Import Globales==========
import React,{useState} from 'react';

//=========Import Locales==========
import '../styles/footer.css';
import { Modal ,ModalHeader,ModalBody,ModalFooter} from './Modal.jsx';

export const   Footer = () =>{

        var [showModal_QS,setShowModal_QS] = useState(false);
        var [showModal_CC,setShowModal_CC] = useState(false);
        var [showModal_E,setShowModal_E] = useState(false);
        var [showModal_D,setShowModal_D] = useState(false);

        const objStyle ={
                'display':'inline-flex',
                'align-items': 'center',
        };
        

        return(
                <footer>
                        <section id='info_footer'>
                                <div className="col-lg-3">
                                        <h5>Informacion importante</h5>
                                        <ul>
                                                <li><a href onClick={()=>setShowModal_QS(true)}>Quienes Somos</a></li>
                                                <li><a href onClick={()=>setShowModal_CC(true)}>Como Comprar</a></li>
                                                <li><a href onClick={()=>setShowModal_E(true)}>Envios CABA/AMBA</a></li>
                                                <li><a href onClick={()=>setShowModal_D(true)}>Devoluciones</a></li>
                                        </ul>
                                </div>
                                <div className="col-lg-3">
                                        <h5>Redes Sociales</h5>
                                        <cwnter>
                                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/600px-Instagram-Icon.png' width='50px' />
                                                <br></br>
                                        </cwnter>
                                        <a href='#'>Instagram:  <strong>@BangVaper</strong></a>
                                </div>
                                <div className="col-lg-3">
                                        <h5>Pagos USDT</h5>
                                        <img src='https://i.ibb.co/QPcwYsR/pngegg.png' width='300px'/>
                                        <p>lorem dasdas dsadsa dadsa dsadsa</p>
                                </div>
                        </section>
                        <div> Sitio Web Desarrollado por @DevAds</div>


                        <Modal show = {showModal_QS}>
                                <ModalHeader>
                                <h1><strong> Quienes Somos</strong></h1>
                                </ModalHeader>
                                <ModalBody>
                                <table>
                                        <tr>
                                        <td style={{"width":"60%"}}>
                                                <p style={{textAlign:'justify'},{margin:'0px 20px'}}>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit morbi vivamus posuere, fringilla odio potenti eros dictumst accumsan nibh viverra iaculis elementum, maecenas eleifend varius lectus turpis euismod tortor facilisis hac. Faucibus a congue sollicitudin maecenas ad penatibus ultrices laoreet, interdum natoque lobortis arcu dignissim eros nunc ut massa, torquent libero venenatis inceptos placerat odio nibh. Rhoncus nullam pellentesque elementum praesent magnis hac dictum sociosqu aptent mattis litora, penatibus primis erat netus nulla nec sagittis orci tristique nisi, montes mauris cubilia metus taciti dis mollis pulvinar nunc imperdiet.
                                                <br></br><br></br>
Urna fusce aptent facilisis dui, posuere integer scelerisque habitant, tempor fames et. Risus ultricies a vivamus mauris potenti urna et convallis, arcu suspendisse viverra vestibulum tincidunt hendrerit neque libero in, nisi morbi nascetur litora eleifend dis justo. Ornare consequat tincidunt eleifend id taciti laoreet fermentum, aliquet suscipit malesuada purus nostra per penatibus, ad natoque morbi duis augue orci.
                                                <br></br><br></br>
Urna fusce aptent facilisis dui, posuere integer scelerisque habitant, tempor fames et. Risus ultricies a vivamus mauris potenti urna et convallis, arcu suspendisse viverra vestibulum tincidunt hendrerit neque libero in, nisi morbi nascetur litora eleifend dis justo. Ornare consequat tincidunt eleifend id taciti laoreet fermentum, aliquet suscipit malesuada purus nostra per penatibus, ad natoque morbi duis augue orci.
                                                </p>
                                        </td>
                                        <td style={{"width":"40%","vertical-align":"top"}}>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvCT02RBuH_TYLRkngr0ZIRa1jWrIHCNO3g" alt={'Photo of  Bangvaper'} ></img>
                                          </td>
                                        </tr>
                                </table>
                                </ModalBody>
                                <ModalFooter>
                                <a  className="btn btn-secondary" href onClick={()=>setShowModal_QS(false)}>Cerrar</a>
                                </ModalFooter>
                        </Modal>

                        <Modal show = {showModal_CC}>
                                <ModalHeader>
                                <h1><strong> Como Comprar</strong></h1>
                                </ModalHeader>
                                <ModalBody>
                                <table>
                                        <tr>
                                        <td style={{"width":"60%"}}>
                                                <p style={{textAlign:'justify'}}>
                                                <ul>
                                                        vamo a probar
                                                </ul>
                                                </p>
                                        </td>
                                        <td style={{"width":"40%","vertical-align":"top"}}>
                                                <img src="" alt={'Photo of ' +'ddd'} ></img>
                                        </td>
                                        </tr>
                                </table>
                                </ModalBody>
                                <ModalFooter>
                                <a  className="btn btn-secondary" href onClick={()=>setShowModal_CC(false)}>Cerrar</a>
                                </ModalFooter>
                        </Modal>

                        <Modal show = {showModal_E}>
                                <ModalHeader>
                                <h1><strong> Envios CABA/AMBA </strong></h1>
                                </ModalHeader>
                                <ModalBody>
                                <table>
                                        <tr>
                                        <td style={{"width":"60%"}}>
                                                <p style={{textAlign:'justify'}}>
                                                <ul>
                                                        vamo a probar
                                                </ul>
                                                </p>
                                        </td>
                                        <td style={{"width":"40%","vertical-align":"top"}}>
                                                <img src="" alt={'Photo of ' +'ddd'} ></img>
                                        </td>
                                        </tr>
                                </table>
                                </ModalBody>
                                <ModalFooter>
                                <a  className="btn btn-secondary" href onClick={()=>setShowModal_E(false)}>Cerrar</a>
                                </ModalFooter>
                        </Modal>

                        <Modal show = {showModal_D}>
                                <ModalHeader>
                                <h1><strong> Devoluciones </strong></h1>
                                </ModalHeader>
                                <ModalBody>
                                <table>
                                        <tr>
                                        <td style={{"width":"60%"}}>
                                                <p style={{textAlign:'justify'}}>
                                                <ul>
                                                        vamo a probar
                                                </ul>
                                                </p>
                                        </td>
                                        <td style={{"width":"40%","vertical-align":"top"}}>
                                                <img src="" alt={'Photo of ' +'ddd'} ></img>
                                        </td>
                                        </tr>
                                </table>
                                </ModalBody>
                                <ModalFooter>
                                <a  className="btn btn-secondary" href onClick={()=>setShowModal_D(false)}>Cerrar</a>
                                </ModalFooter>
                        </Modal>
                </footer>
        );

}