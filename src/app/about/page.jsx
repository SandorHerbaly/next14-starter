import Image from 'next/image';
import styles from './about.module.css';


const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/4132776/pexels-photo-4132776.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="About Page Image" fill/>
      </div>
    </div>
  )
}

export default AboutPage


