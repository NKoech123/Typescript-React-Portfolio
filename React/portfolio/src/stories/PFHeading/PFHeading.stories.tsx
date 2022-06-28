import React from 'react';
import PFHeading from '../../foundation/PFHeading/PFHeading';

export default {
    title: "Foundation/PFHeading",
    component: PFHeading,
  };

export const HeadingAboutme = () =>{
    return (
        <PFHeading
            variant= "OrderedContents"
            text = "About me"
 
        />
    );

};

export const HeadingExperience = () =>{
    return (
        <PFHeading
            variant= "OrderedContents"
            text = "Experience"

        />
    );

};

export const HeadingProjects = () =>{
    return (
        <PFHeading
            variant= "OrderedContents"
            text = "Projects"

        />
    );

};

export const HeadingGetInTouch = () =>{
    return (
        <PFHeading
            variant= "OrderedContents"
            text = "Get in touch"

        />
    );

};

