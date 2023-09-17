import { useState } from 'react'
import plusSvg from '../../assets/Plus.svg'
import './styles.css'
import { BimesterHeaderTypes } from './types'
import ModalContent from '../disciplines-modal'
import { createPortal } from 'react-dom'

export default function BimesterHeader({ bimester }: BimesterHeaderTypes) {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <header className="bimester-header-container">
      <h3>{bimester}</h3>
      <button type="button" onClick={handleClick} className="add-button">
        <img src={plusSvg} alt="plus-svg" />
      </button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </header>
  )
}
