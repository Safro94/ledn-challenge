import { FC, PropsWithChildren, ReactNode } from 'react'
import { CardContainer, CardContent, CardImage } from './Card.styles'

interface Props extends PropsWithChildren {
  title: string
  subtitle?: string
}

export const Card: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <CardContainer>
      <CardImage src='https://picsum.photos/200/300' alt='Planet' />

      <CardContent>
        <h2>{title}</h2>

        {subtitle && <h3>{subtitle}</h3>}
        {children && <p>{children}</p>}
      </CardContent>
    </CardContainer>
  )
}
