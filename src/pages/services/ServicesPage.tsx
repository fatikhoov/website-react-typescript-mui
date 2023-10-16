import ServicesWebsitesCards from '../../modules/ServicesCards'
import Layout from '../../UI/Layout'
import { pagesWebsites } from '../../routes/index'

export default function MyRoot() {
  return (
    <Layout>
      <ServicesWebsitesCards pagesWebsites={pagesWebsites} />
    </Layout>
  )
}
