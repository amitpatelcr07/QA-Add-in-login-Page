import DisplayQ from "./DisplayQ";
function Questions(props){
     const {data}=props
    return <>
        <div>
            {data.map((val)=>{
                return <DisplayQ id={val.id} {...val}/>
            })}
        </div>
    </>
}

export default Questions;