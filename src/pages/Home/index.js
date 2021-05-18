import Edit from './components/Edit';
import List from './components/List';
import {useState} from 'react';

const Home = () =>{
    const [data,setData] = useState([]);
    return (
        <div>
            <Edit add={setData}/>
            <List listData ={data} deleteData = {setData}/>
        </div>
    )
}

export default Home;