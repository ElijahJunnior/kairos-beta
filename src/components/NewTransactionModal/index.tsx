import Modal from 'react-modal';

import { Container } from './styles';

import imgClose from '../../assets/close.svg'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >

            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={imgClose} alt='Fechar Modal' />
            </button>

            <Container>
                <h2> Cadastrar Transação</h2>
                <input placeholder='Titulo' />
                <input type='number' placeholder='Valor' />
                <input placeholder='Categoria' />
                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )

}