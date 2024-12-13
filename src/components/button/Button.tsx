import { FC, PropsWithChildren } from 'react'
import { ButtonBase } from './Button.styles'

export enum ButtonTypes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface Props
  extends PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonTypes
}

export const Button: FC<Props> = ({
  variant = ButtonTypes.PRIMARY,
  children,
  ...rest
}) => {
  return (
    <ButtonBase variant={variant} {...rest}>
      {children}
    </ButtonBase>
  )
}
