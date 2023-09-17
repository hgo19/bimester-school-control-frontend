import './styles.css'
import chartVector from '../../assets/Chart.svg'
import dumpVector from '../../assets/dump-vector.svg'
import Tooltip from '../tooltip'

export default function DisciplineCard() {
  return (
    <div className="card-container">
      <div className="discipline-card-biologia">
        <div>
          <p className="discipline-name">Biologia</p>
          <span className="discipline-created-at">28/04/2022</span>
        </div>
        <div className="discipline-grade-container">
          <img src={chartVector} alt="chart-vector" className="chart-vector" />
          <span>Nota: 3</span>
        </div>
      </div>
      <Tooltip delay={0} direction={'right'} content={'Remover'}>
        <button className="dump-button">
          <img src={dumpVector} alt="dump-vector" />
        </button>
      </Tooltip>
    </div>
  )
}
