import { useEffect, useState } from 'react'
import plusSvg from '../../assets/Plus.svg'
import './styles.css'
import { BimesterHeaderTypes } from './types'
import ModalContent from '../disciplines-modal'
import { createPortal } from 'react-dom'
import Tooltip from '../tooltip'

export default function BimesterHeader({ bimestre }: BimesterHeaderTypes) {
  const [showModal, setShowModal] = useState(false)

  const [isTextVisible, setIsTextVisible] = useState(window.innerWidth >= 900)

  useEffect(() => {
    const handleResize = () => {
      setIsTextVisible(window.innerWidth >= 970)
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Inicialize com o valor correto

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <header className="bimester-header-container">
      <h3 className="bimester-header-title">{bimestre}</h3>
      <Tooltip delay={0} direction={'top'} content={'Adicionar'}>
        <button type="button" onClick={handleClick} className="add-button">
          {isTextVisible && <p className="button-text">Lançar Nota</p>}
          <img src={plusSvg} alt="plus-svg" className="plus-svg" />
        </button>
      </Tooltip>
      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => setShowModal(false)}
            bimestre={bimestre}
          />,
          document.body
        )}
    </header>
  )
}
