import './styles.css'
import dumpVector from '../../assets/dump-vector.svg'
import Tooltip from '../tooltip'
import { DisciplineCardTypes } from './types'
import ChartSvg from '../chart-svg'
import { deleteBimesterResult } from '../../services/api'
import { useContext } from 'react'
import BimesterResultContext from '../../context/bimester-result'

export default function DisciplineCard({
  id,
  name,
  createdAt,
  grade,
  gradeColor,
  fillColor
}: DisciplineCardTypes) {
  const { fetchData } = useContext(BimesterResultContext)

  const deleteDiscipline = async (id: string) => {
    try {
      await deleteBimesterResult(id)
      await fetchData()
    } catch (error) {
      console.log(error)
    }
  }
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
        <button
          type="button"
          onClick={() => deleteDiscipline(id)}
          className="dump-button"
        >
          <img src={dumpVector} alt="dump-vector" />
        </button>
      </Tooltip>
    </div>
  )
}
