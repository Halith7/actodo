import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"

function Landing() {
    const data=useLocation()
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header name={data.state.user} />
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          {/* Cards */}
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Pudukkottai"} />
          <Card bgcolor={"#FD6663"} title={"July 12"} subtitle={"14:23:45"} />
          <Card bgcolor={"#FCA201"} title={"By Using"} subtitle={"React"} />


        </div>
        {/* Todo Container */}
       <TodoContainer/>

      </div>



    </div>

  )
}

export default Landing