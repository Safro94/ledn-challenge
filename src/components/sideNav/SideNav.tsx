import { Routes } from 'routes/routes.types'
import {
  SideNavContainer,
  SideNavSummaryIcon,
  SideNavListOption,
  SideNavLogo,
  SideNavLogoContainer,
  SideNavList,
} from './SideNav.styles'
import { useTranslation } from 'react-i18next'

// This component could also become a hamburger menu in mobile
export const SideNav = () => {
  const { t } = useTranslation()

  const links = [
    {
      label: t('sideNav.summary'),
      to: Routes.SUMMARY,
      icon: <SideNavSummaryIcon />,
    },
  ]

  return (
    <SideNavContainer>
      <SideNavLogoContainer>
        <SideNavLogo to={Routes.SUMMARY}>CB</SideNavLogo>
      </SideNavLogoContainer>

      <SideNavList>
        {links.map((link) => (
          <li key={link.to}>
            <SideNavListOption to={link.to}>
              {link.icon} {link.label}
            </SideNavListOption>
          </li>
        ))}
      </SideNavList>
    </SideNavContainer>
  )
}
