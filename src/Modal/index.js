import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }){
    
    //Para poder crear modales y renderizar en una nueva vista
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            { children }
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };