import reactLogo from '../assets/images/react.svg';
import styles from '../assets/styles/DemoComponent.module.scss';
function DemoComponent() {
  return (
    <>
      <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
    </>
  );
}

export default DemoComponent;
