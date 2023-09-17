import './styles.css'
import dumpVector from '../../assets/dump-vector.svg'
import Tooltip from '../tooltip'
import { DisciplineCardTypes } from './types'
import ChartSvg from '../chart-svg'

export default function DisciplineCard({
  name,
  createdAt,
  grade,
  gradeColor,
  fillColor
}: DisciplineCardTypes) {
  return (
    <div className="card-container">
      <div className={`discipline-card ${name.toLowerCase()}`}>
        <div>
          <p className="discipline-name">{name}</p>
          <span className="discipline-created-at">{createdAt}</span>
        </div>
        <div className={`discipline-grade-container`}>
          <div className="chart-alignment">
            <ChartSvg fillColor={fillColor} />
          </div>
          <span className={gradeColor}>{`Nota: ${grade}`}</span>
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
