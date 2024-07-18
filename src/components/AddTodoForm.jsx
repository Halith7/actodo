import { useState } from "react"

function AddTodoForm(props)
{
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr

    const [newactivity,setNewactivity]=useState("")

    function handleChange(event)
    {
    setNewactivity(event.target.value)
    }

    function addactivity()
    {
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewactivity("")
    }
    return(
        <div className="flex flex-col gap-3">
        <h1 className="font-medium text-2xl">Manage your Activitiy</h1>
        <div>
        <input value={newactivity} onChange={handleChange} type="text" className="border border-black p-1 bg-transparent" placeholder="Next Activity"/>
        <button onClick={addactivity} className="bg-black text-white p-1 border border-black">Add</button>
        </div>
    </div>
    )
}
export default AddTodoForm