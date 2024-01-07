import './App.css';

let allProduct = [
  {
    plan: "FREE",
    price: "$0/month",
    option: [{value:true, text:"Single User"},{value:true, text:"50GB Storage"},{value:true, text:"Unlimited Public Projects"},{value:true, text:"Community Access"},{value:false, text:"Dedicated Phone Support"},{value:false, text:"Free Subdomain"},{value:false, text:"Monthly Status Reports"}]
  },
  {
    plan: "PLUS",
    price: "$9/month",
    option: [{value:true, text:"Single User"},{value:true, text:"50GB Storage"},{value:true, text:"Unlimited Public Projects"},{value:true, text:"Community Access"},{value:true, text:"Dedicated Phone Support"},{value:true, text:"Free Subdomain"},{value:false, text:"Monthly Status Reports"}]
  },
  {
    plan: "PRO",
    price: "$49/month",
    option: [{value:true, text:"Single User"},{value:true, text:"50GB Storage"},{value:true, text:"Unlimited Public Projects"},{value:true, text:"Community Access"},{value:true, text:"Dedicated Phone Support"},{value:true, text:"Free Subdomain"},{value:true, text:"Monthly Status Reports"}]
  }
]

function App() {
let productList = allProduct
  return (
    <div className="App p-5">
    {productList.map((response)=>(
      <PriceCard data={response} />
    ))}

    </div>
  );
}

function PriceCard({data}){

  return(
    <div className='card '>
      <div className='card-header'>
        <h5>{data.plan}</h5>
        <h1>{data.price}</h1>
      </div>
      <div className='card-body'>
      <ul>
      {data.option.map((val, ind)=>(
        <li style={val.value ?{  color: "#000"}: { color: "rgb(86, 86, 86)"} }>{val.value? <i class="fa-solid fa-check" style={{color:"#000"}}></i> :<i class="fa-solid fa-xmark"></i>} {val.text}</li>
      ))}
      </ul>
      <div className='btn btn-primary btn-lg rounded-pill'>Button</div>
      </div>
    </div>
  )
}

export default App;
