export interface ProjectImage {
  id: string
  src: string
  label: string
  aspectRatio: '4:3' | '1:1' | '16:9'
}

export interface Project {
  id: string
  title: string
  subtitle: string
  date: string
  sortDate: string
  category: 'professional' | 'personal'
  role: string
  client?: string
  collaboration?: string
  description: string
  details: string[]
  exhibitions?: string[]
  tools: string[]
  images: ProjectImage[]
  featured: boolean
  titleFont?: string
}
