import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Layout } from 'components'
import { Detail, Summary } from 'pages'
import { Routes } from './routes.types'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Summary />} />
      <Route path={Routes.DASHBOARD} element={<Detail />} />
    </Route>
  )
)
