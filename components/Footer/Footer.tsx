import Link from "next/link";
import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_links}>
                    <div className={styles.author}>
                        <Logo />
                        <p  className={styles.paragraph}>
                            Politician of Nepal Communist Party and the member of the parliment. Recently Appointed as <span className={styles.bold}> Youth and Sport Minister </span>of Nepal Goverment.
                        </p>
                    </div>

                    <div className={styles.list}>
                        <h3 className={styles.listTitle}>About</h3>
                        <ul>
                            <FooterLink to="/about">About me</FooterLink>
                            <FooterLink to="/">Contact me</FooterLink>
                        </ul>
                    </div>

                    <div className={styles.list}>
                        <h3 className={styles.listTitle}>More</h3>
                        <ul>
                            <FooterLink to="/">Programs</FooterLink>
                            <FooterLink to="/">Agenda</FooterLink>
                            <FooterLink to="/">Media</FooterLink>
                            <FooterLink to="/">Gallery </FooterLink>
                            <FooterLink to="/">Plannings</FooterLink>
                        </ul>
                    </div>

                    <div className={styles.social}>
                        <h3 className={styles.listTitle}>Follow</h3>
                        <ul className={styles.socialicon}>
                            <Link href="https://www.facebook.com/athakmaheshworgahatraj2">
                                <a > <Icon icon="akar-icons:facebook-fill" /></a>
                            </Link>
                            <a ><Icon icon="fa-brands:instagram-square" /></a>
                            <Link href="https://twitter.com/youthmoys">
                                <a ><Icon icon="ant-design:twitter-circle-filled" /></a>
                            </Link>
                            <a ><Icon icon="entypo-social:linkedin-with-circle" /></a>
                        </ul>
                    </div>

                </div>
            </footer>
        </>
    );
};

const FooterLink = ({ children, to }: { children: string; to: string }) => {
    return (
        <li>
            <Link href={to} passHref>
                <a>{children}</a>
            </Link>
        </li>
    );
};

export default Footer;
