
const Item = ({note,id,time,date,deleteData}) =>{
    const deleteItem = () =>{
        return deleteData((prev)=>{
            return prev.filter((item)=>item.id !==id)
        })
    }
    return (
        <div>
            <p>{note}</p>
            <p>{`${time} ${date}`}</p>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default Item;
