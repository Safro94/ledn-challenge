import styled from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'
import { ButtonTypes } from './Button'

const variantStyles = (theme: DefaultTheme, variant = ButtonTypes.PRIMARY) =>
  ({
    primary: `
			background-color: ${theme.palette.primary.main};
			color: ${theme.palette.primary.text};
			border: 1px solid ${theme.palette.primary.main};

			&:hover {
				background-color: ${theme.palette.primary.text};
				color: ${theme.palette.primary.main};
			}
		`,

    secondary: `
			background-color: ${theme.palette.common.white};
			color: ${theme.palette.primary.main};
			border: 1px solid ${theme.palette.primary.main};

			&:hover {
				background-color: ${theme.palette.primary.main};
				color: ${theme.palette.primary.text};
			}
		`,
  }[variant])

export const ButtonBase = styled.button<{ variant: ButtonTypes }>(
  ({ theme, variant }) => `
	padding: 10px;
	border-radius: 6px;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	font-weight: bold;

	${variantStyles(theme, variant)};

	&:disabled {
		opacity: 0.5;
		pointer-events: none;
	}
`
)
