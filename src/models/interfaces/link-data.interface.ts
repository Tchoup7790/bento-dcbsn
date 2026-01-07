import type { CardSize } from '../enums/card-size.enum'
import type { IconType } from '../enums/icon-type.enum'

export interface LinkData {
  title: string
  url: string
  iconType: IconType
  imageUrl: string
  cardSize: CardSize
}
