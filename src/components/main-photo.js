import React from 'react';
import PropTypes from 'prop-types';

const MainPhoto = (props) => {

    return (
        <img className={props.className} src={props.source} alt={props.alternateText} />
    )

}

MainPhoto.propTypes = {
    source: PropTypes.string.isRequired,
    alternateText: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default MainPhoto;