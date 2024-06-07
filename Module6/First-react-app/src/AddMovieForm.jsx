import { useState } from "react";
function AddMovieForm({onMovieAdded})
{
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")

    function handleSubmitMovie(e)
    {
        e.preventDefault()
        throw(new Error("Syntax is incorrect"))
       
        onMovieAdded({title, year})
       
        
    }
    return(
        <form onSubmit={handleSubmitMovie}>
            <div>
                <label> Movie Title:
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="title"></input>
                </label>
            </div>
            <div>
                <label> Movie Year:
                    <input type="text" value={year} onChange={(e)=>setYear(e.target.value)} name="year"></input>
                </label>
            </div>
            <div>
                <label>
                    <button style={{border: "1px solid black"}}>Add Movie</button>
                </label>
            </div>
        </form>
    )
}
export default AddMovieForm;