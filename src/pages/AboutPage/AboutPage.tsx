import { classNames } from '@/helpers/classname/classname';
import React from 'react';

const AboutPage = () => {
    return (
        <div className={`${classNames('erzhan' , {'hide' : false} , ['secondClassa'])}`}>
            ABOUT PAGE
        </div>
    );
};

export default AboutPage;
