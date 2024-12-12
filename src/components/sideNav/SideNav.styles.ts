import { SummaryIcon } from 'icons/Summary'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const baseIconStyles = css`
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  fill: ${({ theme }) => theme.palette.primary.text};
  justify-self: center;
`

export const SideNavLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: 1px solid ${({ theme }) => theme.palette.primary.text};
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.7);
`

export const SideNavLogo = styled(Link)`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.primary.text};
  font-weight: bold;
`

export const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
`

export const SideNavSummaryIcon = styled(SummaryIcon)`
  ${baseIconStyles}
`

export const SideNavList = styled.ul`
  flex: 1;
`

export const SideNavListOption = styled(Link)`
  display: grid;
  gap: 0.5rem;
  justify-content: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.palette.primary.text};
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.4s ease-in-out;
  border-radius: ${({ theme }) => theme.radius.medium};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.text};
    color: ${({ theme }) => theme.palette.primary.main};

    ${SideNavSummaryIcon} {
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }
`
