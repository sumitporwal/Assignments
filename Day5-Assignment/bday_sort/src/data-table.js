import React, { useEffect,useState }  from 'react';
import { Table,message, Divider } from 'antd';
import axios from 'axios';
import Filter from './filter';

export default function DataTable() {

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Birth Date',
          dataIndex: 'birthDate',
        },
    ];

    const [data,setData] = useState([]);
    let userData = [];

    useEffect(() => {
        axios.get("/data.json").then((res)=>{
           setData(res.data);
         }).catch((error)=>{
           message.error("Something went wrong");
         })
    },[]);
  
    function onChange(pagination, filters, sorter, extra) {
          console.log('params', pagination, filters, sorter, extra);
    }

    const compareName = (a,b) => {

        const name1 = a.name.toUpperCase();
        const name2 = b.name.toUpperCase();
    
        let comparison = 0;
    
        if (name1 > name2) {
            comparison = 1;
        } else if (name1 < name2) {
            comparison = -1;
        }
        return comparison;
    }
    
    const sortByName = () => {
        userData.sort(compareName);
        setData(userData);
    }
    
    const sortByBirthDate = () => {
        userData.sort(function(a,b){
          return new Date(a.birthDate).valueOf() - new Date(b.birthDate).valueOf();
        });
        setData(userData);
    }
    
    const radioChange = (value) => {
        userData = [...data];
        if(value == "1"){
           sortByName();
        }
        else{
           sortByBirthDate();
        }
    }

    return(
        <div style={{width: '90%',marginTop: '3%',marginLeft: '5%'}}>
            <h2 id="h2">User Details</h2>
            <Filter radioChange={radioChange}></Filter>
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}