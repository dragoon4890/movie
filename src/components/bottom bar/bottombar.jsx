"use client"
import Image from "next/image"
import styles from "./bottombar.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"





const Bottombar =()=>{
    const router=usePathname()
    const LinkActive =(href)=>{
        
    
        return router ===href;
    }

    console.log(router)
    
    return (<div className={styles.panel}>
       
        <div className={styles.container}>
        <Link href="/" alt="Home">
        {LinkActive("/") && <Image src="/Subtract.svg" height="42" width="78" className={styles.image}/>}
        { LinkActive("/") && <div className={styles.box}> </div>}
            <Image src="/home.png" height="16" width="16" className={styles.img} /> 
            </Link>
        </div>
        

        
        <div className={styles.container}>
        <Link href="/location" alt="location">
        {LinkActive("/location") && <Image src="/Subtract.svg" height="42" width="78" className={styles.image}/>}
        { LinkActive("/location") && <div className={styles.box}> </div>}
        <Image src="/location.png" height="40" width="78" className={styles.imi} />
        </Link>
        
        </div>
        

        
        <div className={styles.container}>
        <Link href="/ticket" alt="ticket">
        {LinkActive("/ticket") && <Image src="/Subtract.svg" height="42" width="78" className={styles.image}/>}
        { LinkActive("/ticket") && <div className={styles.box}> </div>}
        <Image src="/ticket.png" width="78" height="40" className={styles.imi} />
        </Link>
        </div>
        
        
        
        <div className={styles.container}>
        <Link href="/user" alt="user">
        {LinkActive("/user") && <Image src="/Subtract.svg" height="42" width="78" className={styles.image}/>}
        { LinkActive("/user") && <div className={styles.box}> </div>}
        <Image src="/user.png" height="40" width="78" className={styles.imi} />
        </Link>
        </div>
        
        
    </div>)
}

export default Bottombar