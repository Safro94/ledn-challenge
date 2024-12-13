import styled, { css } from 'styled-components'

const arrow = css`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
`

export const DropdownContainer = styled.div`
  position: relative;
`

export const DownArrow = styled.i`
  ${arrow}
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`

export const UpArrow = styled.i`
  ${arrow}
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`

export const DropdownToggleButton = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  padding: 0.5rem;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radius.small};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.text};
    border-color: ${({ theme }) => theme.palette.primary.text};

    ${DownArrow} {
      border-color: ${({ theme }) => theme.palette.primary.text};
      border-width: 0 2px 2px 0;
    }

    ${UpArrow} {
      border-color: ${({ theme }) => theme.palette.primary.text};
      border-width: 2px 0 0 2px;
    }
  }
`

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

export const DropdownMenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.text};
  }
`
