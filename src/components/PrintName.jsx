import React  from "react";
import PropTypes from 'prop-types';

PrintName.propTypes={
    name:PropTypes.string.isRequired,
    count:PropTypes.number.isRequired
}

function PrintName({name,count}){
console.log("Props",count)
return (
    <>{name} {count? count: 'NO COUNT'}</>
)
}

export default PrintName;