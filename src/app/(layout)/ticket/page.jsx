"use client"
import Bottombar from "@/components/bottom bar/bottombar"
import styles from "./page.module.css";
import Image from "next/image";
import { IonIcon } from "@ionic/react";
import { shareSocialOutline} from "ionicons/icons";
import {scanOutline} from "ionicons/icons";

const Ticket =()=>{
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.topbar}>
                <IonIcon icon={shareSocialOutline}  className={styles.navicon}></IonIcon>
                <IonIcon icon={ scanOutline}className={styles.navicon}></IonIcon>
                </div>
                <div className={styles.textcontainer}>

                    <h2 className={styles.heading}>
                        Mobile Ticket
                    </h2>
                    <h3 className={styles.para}>
                        Simply scan the barcode to access your one time movie play
                    </h3>
                </div>
                <div className={styles.imagecontainer}>
                       <div className={styles.poster}> 
                            <Image src="/Ticet.png" fill className={styles.img} /> 
                        </div>
                        <div className={styles.box}>

                        </div>
                        <div className={styles.details}>
                            <div className={styles.row}> <h5> Date: April 23rd  </h5>     <h5>    Time: 6pm</h5></div>
                        
                            <div className={styles.row}><h5>Row: 2</h5><h5> Seats:9, 10</h5> </div>
                        </div>

                        <Image src="/bar code.png" height={80} width={290} className={styles.barcode}/>

                </div>


                

            </div>
          
        </div>
    )
}

export default Ticket