import React from "react";
import PropTypes from "prop-types";

const PrimaryButton = ({text , onPress}) => {
    return <div className="btn-wrapper text-center">
        <button
            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="button"
        >
            {text}
        </button>
    </div>;
}

PrimaryButton.propTypes = {
    text: PropTypes.string.isRequired,
}

export default PrimaryButton;
