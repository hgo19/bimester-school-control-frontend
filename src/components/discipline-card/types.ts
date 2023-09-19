export type DisciplineCardTypes = {
  id: string
  name: string
  bimester: 'PRIMEIRO' | 'SEGUNDO' | 'TERCEIRO' | 'QUARTO'
  createdAt: string
  grade: number
  gradeColor: string
  fillColor: 'grade-red' | 'grade-yellow' | 'grade-green'
}
