import plusSvg from '../../assets/Plus.svg'
import './styles.css'
import { BimesterHeaderTypes } from './types'

export default function BimesterHeader({ bimester }: BimesterHeaderTypes) {
  return (
    <header className="bimester-header-container">
      <h3>{bimester}</h3>
      <button type="button" className="add-button">
        <img src={plusSvg} alt="plus-svg" />
      </button>
    </header>
  )
}
