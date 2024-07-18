import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props) {
    const navigate=useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()

    function handleUinput(event) {
        setEusername(event.target.value)
    }
    function handlePinput(event) {
        setEpassword(event.target.value)
    }
    function addUser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")

    }
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey hi</h1>
                <p>Signup here :)</p>

                <div className="flex flex-col gap-2 m-2">
                    <input type="text"
                        className="w-52 border-black p-1 border rounded-md bg-transparent"
                        placeholder="Username" onChange={handleUinput}></input>
                    <input type="text"
                        className="w-52 border-black p-1 border rounded-md bg-transparent"
                        placeholder="Password" onChange={handlePinput}></input>
                    <input type="text"
                        className="w-52 border-black p-1 border rounded-md bg-transparent"
                        placeholder="Confirm Password"></input>

                    <button className="bg-[#ff9e2f] w-24 p-1 border rounded-md" onClick={addUser}>Signup</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login </Link></p>
                </div>

            </div>

        </div>
    )
}

export default Signup