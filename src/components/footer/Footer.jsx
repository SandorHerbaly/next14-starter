import styles from './footer.module.css';



const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>lamadev</div>
      <div className={styles.text}>
        Lama creative thoughts agency &copy; All rights reserdved
      </div>
    </div>
  )
}

export default Footer