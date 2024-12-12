import { Routes } from 'routes/routes.types'
import {
  SideNavContainer,
  SideNavSummaryIcon,
  SideNavListOption,
  SideNavLogo,
  SideNavLogoContainer,
  SideNavList,
} from './SideNav.styles'

const LINKS = [
  {
    label: 'Summary',
    to: Routes.SUMMARY,
    icon: <SideNavSummaryIcon />,
  },
]

export const SideNav = () => {
  return (
    <SideNavContainer>
      <SideNavLogoContainer>
        <SideNavLogo to={Routes.SUMMARY}>CB</SideNavLogo>
      </SideNavLogoContainer>

      <SideNavList>
        {LINKS.map((link) => (
          <li key={link.label}>
            <SideNavListOption to={link.to}>
              {link.icon} {link.label}
            </SideNavListOption>
          </li>
        ))}
      </SideNavList>
    </SideNavContainer>
  )
}
