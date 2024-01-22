import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';


const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/19808876/pexels-photo-19808876/free-photo-of-fa-hajnal-tajkep-nyar.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Post Image" fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2024</span>     
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Tile</h1>
        <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto sint beatae, aspernatur nihil quis. Repudiandae eum excepturi nihil, sapiente aliquid fugiat quia tempora qui inventore temporibus saepe corrupti obcaecati?</p>
        <Link className={styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard




