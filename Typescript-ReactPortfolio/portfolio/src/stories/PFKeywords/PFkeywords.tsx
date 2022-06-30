import React from 'react'
import PFKeywords from '../../foundation/PFKeywords/PFKeywords';

import {
    FaCaretRight
} from "react-icons/fa";

export const PFKeywordArrow = () =>{
    return (
        <PFKeywords arrowIcon={<FaCaretRight/>} ariaLabel="keyword"/>
    );

};