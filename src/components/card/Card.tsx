import { FC, ImgHTMLAttributes, PropsWithChildren } from 'react'
import { CardContainer, CardImage, CardTitle } from './Card.styles'

type CardProps = FC<PropsWithChildren & { onClick?: () => void }> & {
  Image: FC<ImgHTMLAttributes<HTMLImageElement>>
} & { Title: FC<PropsWithChildren> } & { Subtitle: FC<PropsWithChildren> } & {
  Content: FC<PropsWithChildren>
}

const Card: CardProps = ({ children, onClick }) => {
  return <CardContainer onClick={onClick}>{children}</CardContainer>
}

const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <CardImage {...props} />
}

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <CardTitle>{children}</CardTitle>
}

const Subtitle: FC<PropsWithChildren> = ({ children }) => {
  return <h3>{children}</h3>
}

const Content: FC<PropsWithChildren> = ({ children }) => {
  return children
}

Card.Image = Image
Card.Title = Title
Card.Subtitle = Subtitle
Card.Content = Content

export { Card }
