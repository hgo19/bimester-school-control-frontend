import { useContext } from 'react'

import BimesterResultContext from '../../context/bimester-result'

import DisciplineCard from '../../components/discipline-card'
import BimesterHeader from '../../components/bimester-header'

import './styles.css'

export default function Home() {
  const { results } = useContext(BimesterResultContext)

  const handleDate = (date: string): string => {
    const originalDate = new Date(date)
    const day = String(originalDate.getDate()).padStart(2, '0')
    const month = String(originalDate.getMonth() + 1).padStart(2, '0')
    const year = originalDate.getFullYear()

    return `${day}/${month}/${year}`
  }

  const handleGradeColor = (grade: number): string => {
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
        <BimesterHeader bimester={'Bimestre 1'} />
        <section className="disciplines-container">
          {results.first &&
            results.first.map((e, index) => (
              <DisciplineCard
                key={index}
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
        <BimesterHeader bimester={'Bimestre 2'} />
        {results.second &&
          results.second.map((e, index) => (
            <DisciplineCard
              key={index}
              name={e.discipline}
              createdAt={handleDate(e.createdAt)}
              grade={e.grade}
              gradeColor={handleGradeColor(e.grade)}
              fillColor={handleGradeColor(e.grade)}
            />
          ))}
      </section>
      <section>
        <BimesterHeader bimester={'Bimestre 3'} />
        {results.third &&
          results.third.map((e, index) => (
            <DisciplineCard
              key={index}
              name={e.discipline}
              createdAt={handleDate(e.createdAt)}
              grade={e.grade}
              gradeColor={handleGradeColor(e.grade)}
              fillColor={handleGradeColor(e.grade)}
            />
          ))}
      </section>
      <section>
        <BimesterHeader bimester={'Bimestre 4'} />
        {results.fourth &&
          results.fourth.map((e, index) => (
            <DisciplineCard
              key={index}
              name={e.discipline}
              createdAt={handleDate(e.createdAt)}
              grade={e.grade}
              gradeColor={handleGradeColor(e.grade)}
              fillColor={handleGradeColor(e.grade)}
            />
          ))}
      </section>
    </main>
  )
}
