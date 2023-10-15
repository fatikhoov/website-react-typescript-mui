import Layout from '../../UI/Layout'
import Welcome from './Welcome'
import { ServicesWebsitesCards } from '../../modules/ServicesCards'

import './home.css'
import './mobile.css'

const HomePage = () => {
  return (
    <Layout>
      <Welcome />
      <ServicesWebsitesCards />
    </Layout>
  )
}

export default HomePage
