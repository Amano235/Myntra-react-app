import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home=()=>{
   const items= useSelector((store)=>store.items);
   console.log(items);
        
        return(
         <main>
                <div className="items-container">
                    {items.map((item)=>(
                        <HomeItem key={item.id} item={item}/>
                    ))}
                 <HomeItem item={items[0]}/>
                </div>
            </main>

    )
}
export default Home;