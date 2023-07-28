import { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';

const HamburgerMenu = () => {

  const links=[
    {src: "/phase1.png" , href:"/phase1"},
    {src: "/phase2.png" , href:"/phase2"},
    {src: "/phase3.png" , href:"/phase3"},
    {src: "/phase4.png" , href:"/phase4"},
  ]
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} onClick={handleMenuClick}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {isMenuOpen && (
        <div className={styles.menuOverlay}>
          <div className={styles.opop}>
            <div className={styles.avatar}><Image src="/avatar.png" fill className={styles.avatarimg}/></div>
          <div className={styles.contentcontainer}>
              


              {
                links.map((link,i)=>(
                  <Link href={link.href} >
                    <div className={styles.content}>
                       <Image src={link.src} fill />
                      <h6 className={styles.text}>Phase {i+1}</h6>
                    </div>
                  </Link>
                ))
              }
          </div>
          <div className={styles.closeButton} onClick={handleMenuClick}>
            Close
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
