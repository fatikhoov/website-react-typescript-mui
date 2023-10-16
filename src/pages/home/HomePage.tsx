import Layout from '../../UI/Layout'
import Welcome from './Welcome'
import ServicesWebsitesCards from '../../modules/ServicesCards'
import { pagesWebsites } from '../../routes/index'

import './home.css'
import './mobile.css'

const HomePage = () => {
  return (
    <Layout>
      <Welcome />
      <ServicesWebsitesCards pagesWebsites={pagesWebsites} />
    </Layout>
  )
}

export default HomePage
