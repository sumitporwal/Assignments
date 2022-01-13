import React, { useState, useEffect } from 'react';

function Footer() {
    return (
        <div  style={{display: 'flex',justifyContent: 'center',position: 'absolute',top: '90%',left: '40%'}}>
           <p style={{color: 'black',fontSize: '16px'}}>
             @Copyright sumit
           </p>
        </div>
    )
}

export default Footer;