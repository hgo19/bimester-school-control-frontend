import DisciplineCard from './components/discipline-card'
import './app.css'
import BimesterHeader from './components/bimester-header'

function App() {
  return (
    <main className="main-container">
      <section>
        <BimesterHeader bimester={'Bimestre 1'} />
        <section className="disciplines-container">
          <DisciplineCard
            name={'Biologia'}
            createdAt={'28/04/2023'}
            grade={5}
            gradeColor={'grade-red'}
            fillColor={'#ff5964'}
          />

          <DisciplineCard
            name={'Geografia'}
            createdAt={'28/04/2023'}
            grade={9.5}
            gradeColor={'grade-green'}
            fillColor={'#05ff00'}
          />

          <DisciplineCard
            name={'Artes'}
            createdAt={'28/04/2023'}
            grade={7}
            gradeColor={'grade-yellow'}
            fillColor={'#ffff99'}
          />

          <DisciplineCard
            name={'Sociologia'}
            createdAt={'28/04/2023'}
            grade={7}
            gradeColor={'grade-yellow'}
            fillColor={'#ffff99'}
          />
        </section>
      </section>
      <section>
        <BimesterHeader bimester={'Bimestre 1'} />
        <section className="disciplines-container">
          <DisciplineCard
            name={'Biologia'}
            createdAt={'28/04/2023'}
            grade={5}
            gradeColor={'grade-red'}
            fillColor={'#ff5964'}
          />

          <DisciplineCard
            name={'Geografia'}
            createdAt={'28/04/2023'}
            grade={9.5}
            gradeColor={'grade-green'}
            fillColor={'#05ff00'}
          />

          <DisciplineCard
            name={'Artes'}
            createdAt={'28/04/2023'}
            grade={7}
            gradeColor={'grade-yellow'}
            fillColor={'#ffff99'}
          />

          <DisciplineCard
            name={'Sociologia'}
            createdAt={'28/04/2023'}
            grade={7}
            gradeColor={'grade-yellow'}
            fillColor={'#ffff99'}
          />
        </section>
      </section>
    </main>
  )
}

export default App
