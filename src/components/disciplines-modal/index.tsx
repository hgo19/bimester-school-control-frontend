import './styles.css'
import closeButton from '../../assets/X.svg'
import { BimesterInputType, BimesterMapping, ModalContentProps } from './types'
import React, { useContext, useState } from 'react'
import { postBimesterResult } from '../../services/api'
import BimesterResultContext from '../../context/bimester-result'
import { AxiosError } from 'axios'

export default function ModalContent({ onClose, bimestre }: ModalContentProps) {
  const bimesterMapping: BimesterMapping = {
    'Bimestre 1': 'PRIMEIRO',
    'Bimestre 2': 'SEGUNDO',
    'Bimestre 3': 'TERCEIRO',
    'Bimestre 4': 'QUARTO'
  }

  const INITIAL_STATE: BimesterInputType = {
    bimester: bimesterMapping[`${bimestre}`],
    discipline: '',
    grade: 0
  }

  const [bimesterResult, setBimesterResult] = useState(INITIAL_STATE)
  const [selected, setSelected] = useState(0)

  const { setResults, results } = useContext(BimesterResultContext)

  const handleClick = (
    buttonId: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const target = event.target as HTMLButtonElement
    const innerHTML = target.innerHTML
    setSelected(buttonId)
    setBimesterResult((prevState) => ({
      ...prevState,
      discipline: innerHTML
    }))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setBimesterResult((prevState) => ({
      ...prevState,
      grade: Number(value)
    }))
  }

  const errorTrigger = (message: string) => {
    if (message.includes('Discipline must be')) {
      window.alert('Tenha certeza de ter escolhido uma das disciplinas.')
    } else if (message.includes('There is already a discipline')) {
      window.alert('Já existe essa disciplina cadastrada no bimestre desejado.')
    } else if (message.includes('Grade value must be')) {
      window.alert('A nota do aluno tem que ser um valor entre 0 e 10.')
    } else {
      window.alert('Algo inesperado aconteceu, recarregue a página.')
    }
  }

  const submitResult = async () => {
    try {
      const { bimester, discipline, grade } = bimesterResult
      const data = await postBimesterResult(bimester, discipline, grade)

      const arrData = [...results[bimester], data]

      setResults((prevState) => ({
        ...prevState,
        [bimester]: [...arrData]
      }))

      onClose()
    } catch (error: AxiosError | any) {
      if (error.response) {
        const errorResponse = error.response.data
        errorTrigger(errorResponse.error)
      } else {
        errorTrigger('Unexpected Error')
      }
      console.log('Erro ao fazer inserir um novo resultado', error)
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <header className="modal-header">
          <h1 className="modal-title">{bimestre}</h1>
          <button onClick={onClose} className="close-button">
            <img src={closeButton} alt="close" />
          </button>
        </header>
        <h4 className="modal-subtitle">Disciplina</h4>
        <div className="grade-discipline-container">
          <div className="discipline-cards-container">
            <button
              onClick={(e) => handleClick(1, e)}
              className={
                selected === 1
                  ? `discipline-small-card biologia-sm selected-${selected}`
                  : 'discipline-small-card biologia-sm'
              }
            >
              Biologia
            </button>
            <button
              onClick={(e) => handleClick(2, e)}
              className={
                selected === 2
                  ? `discipline-small-card artes-sm selected-${selected}`
                  : 'discipline-small-card artes-sm'
              }
            >
              Artes
            </button>
            <button
              onClick={(e) => handleClick(3, e)}
              className={
                selected === 3
                  ? `discipline-small-card geografia-sm selected-${selected}`
                  : 'discipline-small-card geografia-sm'
              }
            >
              Geografia
            </button>
            <button
              onClick={(e) => handleClick(4, e)}
              className={
                selected === 4
                  ? `discipline-small-card sociologia-sm selected-${selected}`
                  : 'discipline-small-card sociologia-sm'
              }
            >
              Sociologia
            </button>
          </div>
          <label>
            <p>Nota:</p>
            <input type="number" onChange={handleChange} />
          </label>
        </div>
        <button
          type="button"
          onClick={() => submitResult()}
          className="confirm-button"
        >
          Confirmar
        </button>
      </div>
    </div>
  )
}
