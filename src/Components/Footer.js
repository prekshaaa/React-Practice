import React from "react";
import propTypes from 'prop-types';
import styles from "./footer.module.css";

export default function Footer(props){
    return(
        <>
        <div className={styles.firstDiv}>
            <footer className={styles.footerStyling}>
                <div className={styles.secondDiv}>
                    <h1 className={styles.headingOne}>{props.companyName}</h1>
                    <span className={styles.firstSpan}>Copyright © 
                        <a className={styles.styleA} href="https://gigvistas.com">{props.companyName}</a>{props.year}
                    </span>
                </div>
                <div className={styles.thirdDiv}>
                    <div className={styles.fourthDiv}>
                        <h2 className={styles.headingTwo}>{props.headingOne}</h2>
                        <ul className={styles.unorderedList}>
                            <li>
                                <a href="https://www.linkedin.com/company/gigvistas" rel="noopener noreferrer" target="_blank" className={styles.listItem}>{props.subheadOneOne}
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/GigVistas" rel="noopener noreferrer" target="_blank" className={styles.listItem}>{props.subheadOneTwo}</a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/Gig-Vistas-104797784831553" rel="noopener noreferrer" target="_blank" className={styles.listItem}>{props.subheadOneThree}</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/gigvistas/" rel="noopener noreferrer" target="_blank" className={styles.listItem}>{props.subheadOneFour}</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.fourthDiv}>
                        <h2 className={styles.headingTwo}>{props.headingTwo}</h2>
                        <ul className={styles.unorderedList}>
                            <li>
                                <a className={styles.listItem} href="/about/">{props.subheadTwoOne}</a>
                            </li>
                            <li>
                                <a className={styles.listItem} href="/careers/">{props.subheadTwoTwo}</a>
                            </li>
                            <li>
                                <a className={styles.listItem} href="/faq/">{props.subheadTwoThree}</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.fourthDiv}>
                        <h2 className={styles.headingTwo}>{props.headingThree}</h2>
                        <ul className={styles.unorderedList}>
                            <li>
                                <a className={styles.listItem} href="/privacypolicy/">{props.subheadThreeOne}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
        </>
    )
}

Footer.propTypes = {
    companyName: propTypes.string,
    year: propTypes.number,
    headingOne: propTypes.string,
    subheadOneOne: propTypes.string,
    subheadOneTwo: propTypes.string,
    subheadOneThree: propTypes.string,
    subheadOneFour: propTypes.string,
    headingTwo: propTypes.string,
    subheadTwoOne: propTypes.string,
    subheadTwoTwo: propTypes.string,
    subheadTwoThree: propTypes.string,
    headingThree: propTypes.string,
    subheadThreeOne: propTypes.string 
};

Footer.defaultProps = {
    companyName: "GigVistas",
    year: "2022",
    headingOne: "Reach out",
    subheadOneOne: "Linkedin",
    subheadOneTwo: "Twitter",
    subheadOneThree: "Facebook",
    subheadOneFour: "Instagram",
    headingTwo: "About Us",
    subheadTwoOne: "About Us",
    subheadTwoTwo: "Careers",
    subheadTwoThree: "FAQs",
    headingThree: "Legal",
    subheadThreeOne: "Privacy Policy"
};