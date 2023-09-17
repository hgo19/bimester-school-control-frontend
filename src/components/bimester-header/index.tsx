import plusSvg from '../../assets/Plus.svg'
import './styles.css'

export default function BimesterHeader() {
  return (
    <header className="bimester-header-container">
      <h3>Bimestre 1</h3>
      <button type="button" className="add-button">
        <img src={plusSvg} alt="plus-svg" />
      </button>
    </header>
  )
}
