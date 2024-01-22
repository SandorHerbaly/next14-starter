import styles from './singlePost.module.css';
import Image from 'next/image';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/19808876/pexels-photo-19808876/free-photo-of-fa-hajnal-tajkep-nyar.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Post Image"  fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image 
            className={styles.avatar} 
            src="https://images.pexels.com/photos/19808876/pexels-photo-19808876/free-photo-of-fa-hajnal-tajkep-nyar.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
            alt="Post Image" 
            width={50} height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta blanditiis consequatur voluptas voluptatibus aspernatur maxime repudiandae praesentium illum iusto dolore. A et minima molestiae nostrum ipsa aperiam quam aliquid fuga.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage