import axios from 'axios'
import { useState, useEffect } from 'react'
const Main = ()=>{
const [question, setQuestion] = useState()

useEffect(()=>{
    axios.get('http://localhost:5000/getquestions').then((res) =>setQuestion(res.data.data))
},[])

    return(
        <div className="container-fluid bg-secondary ml-5">
            <h2 className="text-center pa-3 mt-2">Topics</h2>
           {question && question.map((d) =>
            <div className="card">
                <div class="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>{d.question}</p>
                    <footer className="blockquote-footer">{d.userId[0].username} <cite title="Source Title"></cite></footer>
                    </blockquote>
                    <button className="btn">{d.answers.length}<i class="fa fa-comments fa-2x" aria-hidden="true"></i></button>
                    <button className="btn">{d.likes.length}<i class="fa fa-thumbs-up fa-2x" aria-hidden="true"></i></button>
                </div>
            </div>
)}
            <br/>    
            
            <br/>    
        </div>
    )
}

export default Main
