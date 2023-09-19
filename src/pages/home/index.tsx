import { useContext } from 'react'

import BimesterResultContext from '../../context/bimester-result'

import DisciplineCard from '../../components/discipline-card'
import BimesterHeader from '../../components/bimester-header'

import './styles.css'
import { HandleGradeColorType } from './types'

export default function Home() {
  const { results } = useContext(BimesterResultContext)

  const handleDate = (date: string): string => {
    const originalDate = new Date(date)
    const day = String(originalDate.getDate()).padStart(2, '0')
    const month = String(originalDate.getMonth() + 1).padStart(2, '0')
    const year = originalDate.getFullYear()

    return `${day}/${month}/${year}`
  }

  const handleGradeColor = (grade: number): HandleGradeColorType => {
    if (grade < 6) {
      return 'grade-red'
    }
    if (grade >= 6 && grade < 8) {
      return 'grade-yellow'
    }
    return 'grade-green'
  }

  return (
    <main className="main-container">
      <section>
        <BimesterHeader bimestre={'Bimestre 1'} />
        <section className="disciplines-container">
          {results.PRIMEIRO &&
            results.PRIMEIRO.map((e, index) => (
              <DisciplineCard
                key={index}
                id={e.id}
                bimester={'PRIMEIRO'}
                name={e.discipline}
                createdAt={handleDate(e.createdAt)}
                grade={e.grade}
                gradeColor={handleGradeColor(e.grade)}
                fillColor={handleGradeColor(e.grade)}
              />
            ))}
        </section>
      </section>
      <section>
        <BimesterHeader bimestre={'Bimestre 2'} />
        <section className="disciplines-container">
          {results.SEGUNDO &&
            results.SEGUNDO.map((e, index) => (
              <DisciplineCard
                key={index}
                id={e.id}
                bimester={'SEGUNDO'}
                name={e.discipline}
                createdAt={handleDate(e.createdAt)}
                grade={e.grade}
                gradeColor={handleGradeColor(e.grade)}
                fillColor={handleGradeColor(e.grade)}
              />
            ))}
        </section>
      </section>
      <section>
        <BimesterHeader bimestre={'Bimestre 3'} />
        <section className="disciplines-container">
          {results.TERCEIRO &&
            results.TERCEIRO.map((e, index) => (
              <DisciplineCard
                key={index}
                id={e.id}
                bimester={'TERCEIRO'}
                name={e.discipline}
                createdAt={handleDate(e.createdAt)}
                grade={e.grade}
                gradeColor={handleGradeColor(e.grade)}
                fillColor={handleGradeColor(e.grade)}
              />
            ))}
        </section>
      </section>
      <section>
        <BimesterHeader bimestre={'Bimestre 4'} />
        <section className="disciplines-container">
          {results.QUARTO &&
            results.QUARTO.map((e, index) => (
              <DisciplineCard
                key={index}
                id={e.id}
                bimester={'QUARTO'}
                name={e.discipline}
                createdAt={handleDate(e.createdAt)}
                grade={e.grade}
                gradeColor={handleGradeColor(e.grade)}
                fillColor={handleGradeColor(e.grade)}
              />
            ))}
        </section>
      </section>
    </main>
  )
}
