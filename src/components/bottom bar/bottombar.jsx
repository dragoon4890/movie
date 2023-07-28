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
        { name: "/", icon: homeOutline, key:0 },
        { name: "/location", icon: locationOutline,key:1 },
        { name: "/ticket", icon: ticketOutline, key:2 },
        { name: "/user", icon: personOutline, key:3 }
        
      ];
    
   

    
    return (<div className={styles.panel}>
       
        <div className={styles.container}>
    
        {Menus.map((menu, i) => (
         <div key={i+30} className={styles.botom}>
             <span key={i+10} className={`${styles.box} ${i === active ? styles[`acti${i}`] : ''}`}></span>
                     <Link key={i+30} href={menu.name} className={`${styles.links} ${i === active ? styles.active : ''}`} onClick={() => setActive(i)}>
                          <IonIcon icon={menu.icon} className={styles.img} />
                    </Link>
        </div>
        ))}


        </div>
        

        
        
        
        
    </div>)
}

export default Bottombar