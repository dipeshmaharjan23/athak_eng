import { useState } from 'react'
import styles from "./Navbar.module.scss"
import Logo from "../Logo/Logo"
import { Icon } from '@iconify/react'
import Link from 'next/link'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleChange = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.right}>
                    <ul className={isOpen ? `${styles.list} ${styles.mobList} `: `${styles.list}`}>
                        <li>Events</li>
                        <li>Agenda</li>
                        <li>Media</li>
                        <li>Plans</li>
                        <li>Gallery</li>
                        <li>
                            <Link href="/about">
                                About me
                            </Link>
                        </li>
                    </ul> 
                    
                    <div className={styles.menu} onClick={handleChange}>
                        {isOpen ?
                            <Icon icon="charm:cross" />
                            : <Icon icon="charm:menu-hamburger" />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar