import { SideNav } from 'components/sideNav'
import { Outlet } from 'react-router-dom'
import {
  LayoutContainer,
  LayoutContentContainer,
  LayoutMainContainer,
} from './Layout.styles'
import { Header } from 'components/header'

export const Layout = () => {
  return (
    <LayoutContainer>
      <SideNav />

      <LayoutContentContainer>
        <Header />

        <LayoutMainContainer>
          <Outlet />
        </LayoutMainContainer>
      </LayoutContentContainer>
    </LayoutContainer>
  )
}
