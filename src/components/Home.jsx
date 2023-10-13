import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue, reset } from '../Redux/features/counter/counterSlice';
const Home = () => {
    const {value}=useSelector((state)=>state.counter);
    const dispatch=useDispatch();
    console.log(dispatch)
    return (
        <div className='text-center'>
            <h1 className='text-cyan-400'>Counter redux: {value}</h1>
            <button onClick={()=>dispatch(increment())}  className='btn btn-info my-5'>increment</button><br/>
            <button onClick={()=>dispatch(decrement())}  className='btn btn-info my-5'>Decrement</button><br/>
            <button onClick={()=>dispatch(reset())}  className='btn btn-info my-5'>Reset</button><br/>
            <button onClick={()=>dispatch(incrementByValue(5))}  className='btn btn-info my-5'>Payload</button><br/>
        </div>
    );
};

export default Home;