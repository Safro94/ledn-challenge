import { FC, ImgHTMLAttributes, PropsWithChildren } from 'react'
import {
  CardContainer,
  CardImage,
  CardSubtitle,
  CardTitle,
} from './Card.styles'

type CardProps = FC<
  PropsWithChildren & { onClick?: () => void; className?: string }
> & {
  Image: FC<ImgHTMLAttributes<HTMLImageElement>>
} & { Title: FC<PropsWithChildren> } & { Subtitle: FC<PropsWithChildren> } & {
  Content: FC<PropsWithChildren>
}

export const CARD_TEST_ID = 'card'

const Card: CardProps = ({ children, onClick, className }) => {
  return (
    <CardContainer
      onClick={onClick}
      className={className}
      data-testid={CARD_TEST_ID}
    >
      {children}
    </CardContainer>
  )
}

const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <CardImage {...props} />
}

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <CardTitle>{children}</CardTitle>
}

const Subtitle: FC<PropsWithChildren> = ({ children }) => {
  return <CardSubtitle>{children}</CardSubtitle>
}

const Content: FC<PropsWithChildren> = ({ children }) => {
  return children
}

Card.Image = Image
Card.Title = Title
Card.Subtitle = Subtitle
Card.Content = Content

export { Card }
