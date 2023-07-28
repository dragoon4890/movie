"use client"
import { IonIcon } from "@ionic/react";
import styles from "./page.module.css"
import Image from "next/image";
import {chevronBackOutline} from "ionicons/icons"
import Link from "next/link";

const Phase2 = () =>{
    return (
        <div className={styles.container}>
                 <Link href="/" className={styles.back}>
            <IonIcon icon={chevronBackOutline} className={styles.icon}/>
            </Link>

            <div className={styles.textcontainer}>
                Phase 2
            </div>
            <div className={styles.imagecontainer}>
                <span className={styles.cards}>
                    <Image height={180} src="/1.png" width={150} />

                    <Image height={180} src="/2.png" width={150} /> 

                </span>   

                <span className={styles.cards}>
                    <Image height={180} src="/1.png" width={150} />

                    <Image height={180} src="/2.png" width={150} /> 

                </span>  

                <span className={styles.cards}>
                    <Image height={180} src="/1.png" width={150} />

                    <Image height={180} src="/2.png" width={150} /> 

                </span>               
            </div>
        </div>
    )
}


export default Phase2