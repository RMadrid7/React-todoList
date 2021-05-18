import Item from './Item';
const List = ({listData,deleteData}) =>{
    console.log(listData);
    return (
        <div>
            {listData.map((item)=>{
                const {id,date,time,input} = item;
                return (
                    <Item note={input} date={date} time={time} key={id} id={id} deleteData={deleteData}/>
                )})}

        </div>
    )
}

export default List;
