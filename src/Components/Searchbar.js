import React from 'react';
import propTypes from 'prop-types';
import styles from "./Searchbar.module.css";
import { useState } from 'react';

export default function Searchbar(props){
  const [query, setQuery] = useState("");
  
  return (
    <>
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h4 className={styles.styleHeading}>Find Gigs</h4>
      </div>
      <form autocomplete="off" novalidate="" className={styles.formStyling}>
        <div className={styles.searchbarContainer} display="block">
          <div className={styles.inputContainer}>
            <input type="text" id="searchTerm" name="searchTerm" placeholder={props.searchBarText} required className={styles.inputStyling} query= {query} onKeyPress={(event) => { if (event.key === "Enter") {setQuery(event.target.value)}}}/>
              <button className={styles.styleButton} tabindex="0" type="button">{props.buttonText}
              </button>
          </div>
          <fieldset aria-hidden="true" className={styles.fieldsetStyling}></fieldset>
        </div>
      </form>
      <h5 className = {styles.noOfResults}> No Gigs Found.</h5>
    </div>
    </>
  );
};

Searchbar.propTypes = {
  SearchBarText: propTypes.string,
  buttonText: propTypes.string
};
Searchbar.defaultProps = {
  SearchBarText: "Eg. software developers, developer, customer services",
  buttonText: "Search Gigs"
};