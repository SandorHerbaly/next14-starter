import Image from 'next/image';
import styles from './about.module.css';


const AboutPage = () => {

  // console.log("lets check where it works");
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui vitae laboriosam, molestiae, excepturi, commodi totam asperiores pariatur sunt aspernatur praesentium cupiditate est quae necessitatibus doloremque soluta repellendus cum nisi.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experiance</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experiance</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experiance</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About image" fill className={styles.img} 
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw" />
      </div>
    </div>
  )
}

export default AboutPage


