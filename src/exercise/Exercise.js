import {useState} from 'react';

function Exercise(){
const[num, setNum] = useState(1);
const addNum = () => setNum(num +1);

    return (
    <section>
    <button onClick={()=>alert ('Congrats! You clicked the button!')}>Click Here</button>
    <button onClick={addNum}>State</button>
    <h1>{num}</h1>
    </section>
);
}


export default Exercise; 