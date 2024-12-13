import { AvatarIcon } from 'icons'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
`

export const HeaderAvatar = styled.div`
  width: 2rem;
  height: 2rem;
`

export const HeaderAvatarIcon = styled(AvatarIcon)`
  width: 100%;
  height: 100%;
`
