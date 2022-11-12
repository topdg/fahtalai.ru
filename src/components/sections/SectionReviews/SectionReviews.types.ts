import { IGatsbyImageData } from "gatsby-plugin-image"

export interface SectionReviewsProps {
  name?: string
  date?: string
  logo?: IGatsbyImageData
  url?: string
  stars?: number
  text: string
}