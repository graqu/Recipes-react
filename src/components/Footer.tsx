import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made by{' '}
        <a href="https://github.com/graqu" target="_blank">
          graqu
        </a>{' '}
        | 2023
      </p>
    </footer>
  );
};

export default Footer;
