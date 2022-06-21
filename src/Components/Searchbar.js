import React from 'react';
import propTypes from 'prop-types';
import styles from "./Searchbar.module.css";
export default function searchbar(props) {
  return (
    <>
    <div className={styles.firstDiv}>
      <div className={styles.secondDiv}>
        <div className={styles.thirdDiv}>
          <div className={styles.fourthDiv}>
            <h4 className={styles.headingFour}>Find Gigs</h4>
          </div>
        </div>
            <form autocomplete="off" novalidate="" className={styles.formStyling}>
              <div className={styles.fifthDiv} display="block">
                <div className={styles.sixthDiv}>
                  <div className={styles.seventhDiv}>
                    <span className="notranslate">
                    </span>
                    <span style= {{display:"grid", placeItems:"center", paddingRight:5}} className="searchIcon">
                      <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
                        <path d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z" fill="none" stroke="#6C6C6C" stroke-width="4" stroke-linejoin="round"></path>
                        <path d="M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431" stroke="#6C6C6C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M33.2218 33.2218L41.7071 41.7071" stroke="#6C6C6C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                  </div>
                  <input type="text" aria-invalid="false" id="searchTerm" name="searchTerm" placeholder={props.searchBarText} required="" value="" className={styles.inputStyling}/>
                  <div className={styles.eighthDiv}>
                    <button className={styles.buttonStyling} tabindex="0" type="button">{props.buttonText}<span className={styles.spanStyling}></span>
                    </button>
                  </div>
                  <fieldset aria-hidden="true" className={styles.fieldsetStyling}>
                    <legend className={styles.legendStyling}>
                      <span className="notranslate"></span>
                    </legend>
                  </fieldset>
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