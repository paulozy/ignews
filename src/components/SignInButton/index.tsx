import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss';

export function SignInButton() {

  const isUserLoggedIn = true

  return isUserLoggedIn ? (
    <button className={styles.SignInButton}>
      <FaGithub color='#04d361' />
      Paulo Abreu
      <FiX color='#737380' className={styles.closeIcon} />
    </button>

  ) : (
    <button className={styles.SignInButton}>
      <FaGithub color='#eba417' />
      SignIn With Github
    </button>
  )
}