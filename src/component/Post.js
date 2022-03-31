import { useEffect , useState } from "react";
const Postss = () => {
    var [data , setData] = useState([]);

    useEffect(() => {
        const response =  fetch('https://jsonplaceholder.typicode.com/posts');
        response.then(res =>
        res.json()).then(d => {
            setData(d);
        })
    });
    

    return (
        <>
        {data.map(item => {
            <h1></h1>
        })}
        </>
    )
}
export default Postss;