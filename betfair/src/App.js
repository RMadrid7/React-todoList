import axios from 'axios';


function App() {
  const Get = async() =>{
    try{
      const Data = await axios.get("http://c.spdex.com/api/Json_Chart.aspx?rt=80&eid=30569835&f=3&t=0&ref=1");
      console.log(Data.data);
    }
    catch(error){
      alert("GET Error!");
    }
  };

  return (
    <div className="App">
      <button onClick={Get}>Get</button>
    </div>
  );
}

export default App;
