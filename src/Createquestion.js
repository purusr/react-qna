
const Createquestion = ()=>{
    return(
        <div className="container-fluid bg-secondary ml-5">
            <h2 className="text-center">Post your questions</h2>
            <form className="form-control">
             <input name='questionstring' className="form-control" type='text' placeholder="Post your question here"/>
             <br/>
             <button className="btn btn-primary align-middle" type="submit">Post</button>
            </form>
        </div>
    )
}

export default Createquestion