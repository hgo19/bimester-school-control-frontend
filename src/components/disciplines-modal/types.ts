export type ModalContentProps = {
  onClose: () => void
  bimestre: 'Bimestre 1' | 'Bimestre 2' | 'Bimestre 3' | 'Bimestre 4'
}

export type BimesterMapping = {
  'Bimestre 1': 'PRIMEIRO'
  'Bimestre 2': 'SEGUNDO'
  'Bimestre 3': 'TERCEIRO'
  'Bimestre 4': 'QUARTO'
}

export type BimesterInputType = {
  bimester: 'PRIMEIRO' | 'SEGUNDO' | 'TERCEIRO' | 'QUARTO'
  discipline: string
  grade: number
}
