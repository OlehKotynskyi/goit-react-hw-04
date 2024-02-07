import Modal from 'react-modal';
import css from './ImageModal.module.css';
Modal.setAppElement('#root');

const customStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '650px',
      height: '650px',
      backgroundColor: '#c5c2c2',
   },
};

export const ImageModal = ({ isOpen, closeModal, item }) => {
   return (
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
         <div className={css.closedBtn}>
            <button onClick={closeModal}>Close</button>
         </div>
         <div className={css.wrapperImag}>
            <img src={item.urls.regular} alt={item.description} width={500} />
         </div>
      </Modal>
   );
};
