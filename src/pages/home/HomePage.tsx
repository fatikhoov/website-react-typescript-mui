import Layout from '../../UI/Layout'
import Welcome from './Welcome'
import ServicesCards from '../../modules/ServicesCards'

import './home.css'

const HomePage = () => {
  return (
    <Layout>
      <Welcome />
      <ServicesCards />
    </Layout>
  )
}

export default HomePage
