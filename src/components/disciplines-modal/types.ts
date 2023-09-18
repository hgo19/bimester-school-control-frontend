export type ModalContentProps = {
  onClose: () => void
  bimestre: 'Bimestre 1' | 'Bimestre 2' | 'Bimestre 3' | 'Bimestre 4'
}

export interface BimesterOutputData {
  id: string
  bimester: string
  discipline: string
  grade: number
  createdAt: string
  updatedAt: string
}
