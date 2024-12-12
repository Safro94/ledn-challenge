import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Layout } from 'Layout'
import { Detail, Summary } from 'pages'

enum Routes {
  SUMMARY = '/',
  DASHBOARD = '/dashboard',
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Summary />} />
      <Route path={Routes.DASHBOARD} element={<Detail />} />
    </Route>
  )
)
