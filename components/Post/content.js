import Item from "./item"
import Footer from "../footer"

import styles from '../../styles/posts.module.css'

function Content(props) {
  const {allPosts} = props

  const getPostsByYear = (year) => {
    return allPosts.filter(post => post.date.includes(year))
  }

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.year}>2022</p>
        {
          getPostsByYear('2022').map(post => (
            <Item
              id={post.id}
              title={post.title}
              date={post.date}
              key={post.id}
            />
          ))
        }
        <p className={styles.year}>2021</p>
        {
          getPostsByYear('2021').map(post => (
            <Item
              id={post.id}
              title={post.title}
              date={post.date}
              key={post.id}
            />
          ))
        }
        <Footer/>
      </div>
    </div>
  )
}

export default Content