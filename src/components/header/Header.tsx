import { LanguageDropdown } from 'components/languageDropdown'
import {
  HeaderAvatar,
  HeaderAvatarIcon,
  HeaderContainer,
} from './Header.styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderAvatar>
        <HeaderAvatarIcon />
      </HeaderAvatar>

      <LanguageDropdown />
    </HeaderContainer>
  )
}
