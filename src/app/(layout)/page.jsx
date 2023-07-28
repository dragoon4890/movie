"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Bottombar from '@/components/bottom bar/bottombar'
import { IonIcon } from '@ionic/react'
import HamburgerMenu from "@/components/hamburgermenu/HamburgerMenu.jsx"

import {menuOutline} from 'ionicons/icons'

export default function Home() {
  return (
    <div className={styles.main}>
    
      <div className={styles.top}>
        <div className={styles.navbar}>
        <HamburgerMenu />
        
            <h1 className={styles.heading}>Search</h1>
          <Image src="/Group 6.png" height="40" width="40" className={styles.img}/>
        </div>
        <div className={styles.searchcontainer}>
      
          <div  className={styles.box}>
            <input className={styles.input}></input>
        <Image src="/search.png" height="32" width="32" className={styles.search}/>
          </div>

        </div>

      </div>
      <div className={styles.middle}>
        <div className={styles.category}>
          <div className={styles.textcontainer}>
            <h3>
          Popular
          </h3>
          </div>
          <div className={styles.imgcontainer}>
            <Image src="/Rectangle 102.png" height="180" width="150" />
            <Image src="/Rectangle 105.png" height="180"
            width="150" />
          </div>


        </div>

        

        <div className={styles.category}>
          <div className={styles.textcontainer}>
            <h3>
          Must Watch
          </h3>
          </div>
          <div className={styles.imgcontainer}>
            <Image src="/Rectangle 104.jpg" height="180" width="150" className={styles.label} />
            <Image src="/Rectangle 103.jpg" height="180"
            width="150" className={styles.label} />
          </div>


        </div>
        <div className={styles.category}>
          <div className={styles.textcontainer}>
            <h3>
            Popular
            </h3>
          </div>
          <div className={styles.imgcontainer}>
            <Image src="/Rectangle 98.jpg" height="180" width="150" className={styles.label}/>
            <Image src="/Rectangle 99.jpg" height="180"
            width="150" className={styles.label} />
          </div>


        </div>
       
      
      </div> 
  
      
    </div>
  )
}
