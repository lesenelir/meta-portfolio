import Layout from "../../components/layout"
import Footer from "../../components/footer"
import {getTimePost} from "../../lib/timeTool"
import Cd from "../../components/cd"

import styles from '../../styles/timeline.module.css'

function TimelinePage(props) {
  const {timelineData} = props

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div>
            <h1 className={styles.title}>Timeline</h1>
            <article className='md'>
              <div dangerouslySetInnerHTML={{__html: timelineData.contentHtml}}/>
            </article>
            <Cd/>
            <Footer/>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default TimelinePage

export async function getStaticProps() {
  const timelineData = await getTimePost()

  return {
    props: {
      timelineData
    }
  }
}
