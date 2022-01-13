import React, { useState, useEffect } from 'react';
import { message, Table } from 'antd';
import axios from 'axios';

function Child(){

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: 'User ID',
          dataIndex: 'userId',
        },
        {
          title: 'Title',
          dataIndex: 'title',
        },
        {
          title: 'Description',
          dataIndex: 'body',
        },
    ];

    const [data,setData] = useState([]);

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
         setData(res.data);
       }).catch((error)=>{
         message.warn("Something went wrong");
       })
    },[]);

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
      
    return(
        <div style={{width: '90%',marginTop: '3%',marginLeft: '5%'}}>
            <h2 id="h2">User Details</h2>
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}

export default Child;