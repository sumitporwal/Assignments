import  React,{ useState} from 'react';
import { Table, Radio } from 'antd';
import { OmitProps } from 'antd/lib/transfer/ListBody';

export default function Filter(props) {
    
    const [value, setValue] = useState();

    const onRadioChange = e => {
        setValue(e.target.value);
        return props.radioChange(e.target.value);
    };

    return(
        <Radio.Group onChange={onRadioChange} value={value}>
           <Radio value={1}>Sort By Name</Radio>
           <Radio value={2}>Sort By Age</Radio>
        </Radio.Group>
    )
}