"use client"

import styles from "./bottombar.module.css"
import Link from "next/link"
import { useState } from "react"
import { IonIcon } from '@ionic/react';
import {homeOutline} from 'ionicons/icons';
import {locationOutline} from 'ionicons/icons';
import {ticketOutline} from 'ionicons/icons';
import {personOutline} from 'ionicons/icons';





const Bottombar =()=>{

    const [active,setActive]= useState(0);
    const Menus = [
        { name: "/", icon: homeOutline, dis: "translate-x-0" },
        { name: "/location", icon: locationOutline, dis: "translate-x-16" },
        { name: "/ticket", icon: ticketOutline, dis: "translate-x-32" },
        { name: "/user", icon: personOutline, dis: "translate-x-48" }
        
      ];
    
   

    
    return (<div className={styles.panel}>
       
        <div className={styles.container}>
            
       {Menus.map((menu,i)=>(
        <div className={styles.botom}>
            <span className={`${styles.box} ${i==active?styles[`acti${i}`]:""}`}></span>
        <Link href={menu.name} key={i} className={`${styles.links} ${i === active ? styles.active : ''}` } onClick={() => setActive(i)} >
            <IonIcon icon={menu.icon} className={styles.img} />
        </Link>
        
       </div>
       ))}

        </div>
        

        
        
        
        
    </div>)
}

export default Bottombar