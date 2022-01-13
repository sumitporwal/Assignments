import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Parent(){
    return(
        <Link to="/data"><Button type="primary" id="btn">Show Data</Button></Link>
    )
}

export default Parent;