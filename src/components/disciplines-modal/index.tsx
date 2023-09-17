import './styles.css'
import closeButton from '../../assets/X.svg'

type ModalContentProps = {
  onClose: () => void
}

export default function ModalContent({ onClose }: ModalContentProps) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <header className="modal-header">
          <h1 className="modal-title">Bimestre 1</h1>
          <button onClick={onClose} className="close-button">
            <img src={closeButton} alt="close" />
          </button>
        </header>
        <h4 className="modal-subtitle">Disciplina</h4>
        <div className="grade-discipline-container">
          <div className="discipline-cards-container">
            <button className="discipline-small-card biologia-sm">
              Biologia
            </button>
            <button className="discipline-small-card artes-sm selected">
              Artes
            </button>
            <button className="discipline-small-card geografia-sm">
              Geografia
            </button>
            <button className="discipline-small-card sociologia-sm">
              Sociologia
            </button>
          </div>
          <label>
            <p>Nota:</p>
            <input type="number" />
          </label>
        </div>
        <button type="button" className="confirm-button">
          Confirmar
        </button>
      </div>
    </div>
  )
}
