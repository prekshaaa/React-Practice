import React from 'react';
import propTypes from 'prop-types';
import styles from "./Searchbar.module.css";
export default function searchbar(props) {
  return (
    <>
    <div className={styles.firstDiv}>
      <div className={styles.secondDiv}>
        <div className={styles.thirdDiv}>
            <h4 className={styles.styleHeading}>Find Gigs</h4>
        </div>
            <form autocomplete="off" novalidate="" className={styles.formStyling}>
              <div className={styles.fifthDiv} display="block">
                <div className={styles.sixthDiv}>
                  <input type="text" aria-invalid="false" id="searchTerm" name="searchTerm" placeholder={props.searchBarText} required="" value="" className={styles.inputStyling}/>
                  <div className={styles.eighthDiv}>
                    <button className={styles.buttonStyling} tabindex="0" type="button">{props.buttonText}<span className={styles.spanStyling}></span>
                    </button>
                  </div>
                  <fieldset aria-hidden="true" className={styles.fieldsetStyling}></fieldset>
                </div>
              </div>
            </form>
      </div>
    </div>
    </>
  )
}

searchbar.propTypes = {
  SearchBarText: propTypes.string,
  buttonText: propTypes.string
};

searchbar.defaultProps = {
  SearchBarText: "Eg. software developers, developer, customer services",
  buttonText: "Search Gigs"
};