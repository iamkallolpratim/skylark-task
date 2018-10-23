import React  from 'react';
import Spin from 'antd/lib/spin';

export default function Loading(){
    return (
        <div style={{padding:"40px",textAlign:"center"}}><Spin/></div>
    );
}
