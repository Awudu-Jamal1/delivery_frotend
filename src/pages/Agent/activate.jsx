import { useLoaderData } from 'react-router-dom';
import Delivery from './delivery';
function Activate() {
    const data = useLoaderData();
    const datas = data ?data.orders: []

    return ( <>
    {datas?.map((e,i)=><div key={i}><Delivery data={e}/></div>)}
    </> );
}

export default Activate;