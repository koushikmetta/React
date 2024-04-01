import { useState, useRef } from "react"
import Modal from "./Modal";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');
    const modal = useRef();
    function handleChange(event) {
        setEnteredTask(event.target.value)
    }
    function handleClick() {
        if (enteredTask.trim() === '') {
            modal.current.open();
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }
    return (
        <>
            <Modal ref={modal} buttonText='Close'>
                <h2 className='text-xl font-bold text-stone-800 my-4'>Error! Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Please make sure to provide valid value for every field.</p>
            </Modal>
            <div className="flex items-center gap-4">
                <input onChange={handleChange} value={enteredTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text"></input>
                <button onClick={handleClick} className="text-stone-700 hover:text-stone-950 px-1 py-1 rounded-md border border-transparent hover:border-black hover:border-2">Add Task</button>
            </div>
        </>
    )
}