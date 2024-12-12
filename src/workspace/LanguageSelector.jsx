import { useState } from "react";
import { LANGUAGE_VERSIONS } from "../constants";
import PropTypes from "prop-types";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "text-blue-400";

const LanguageSelector = ({ language, onSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true); // Open menu on hover
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false); // Close menu when hover ends
  };

  const handleSelect = (lang) => {
    onSelect(lang);   // Call the onSelect prop to update the selected language
    setIsMenuOpen(false); // Close the menu after selection
  };

  return (
    <div className="ml-2 mb-2 ">
      <div className="relative">
        <button
          onMouseEnter={handleMouseEnter} // Open menu on hover
          className="bg-gray-900 text-white px-4 py-1 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {language}
        </button>

        {/* Dropdown menu */}
        {isMenuOpen && (
          <div
            onMouseLeave={handleMouseLeave} // Close menu when mouse leaves
            className="absolute mt-2 w-48 bg-gray-900 shadow-lg rounded-md"
          >
            {languages.map(([lang, version]) => (
              <button
                key={lang}
                className={`langbutton bg-gray-800 justify-between items-center w-full px-4 py-2 text-sm text-left rounded-md  ${
                  lang === language ? ACTIVE_COLOR : "text-gray-300"
                } hover:${ACTIVE_COLOR} hover:bg-gray-900`}
                onClick={() => handleSelect(lang)}
              >
                <span>{lang} </span>
                <span className="text-gray-500 text-xs">({version})</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Prop validation
LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default LanguageSelector;
