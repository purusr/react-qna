

const Answers = () => {
    return (
        <div className="container-fluid bg-secondary ml-5">
            <div className="card" >
                <div class="card-body">
                    <blockquote className="blockquote mb-0">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante?</h2>
                        <br/>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                    <button className="btn">1234<i class="fa fa-thumbs-up fa-2x" aria-hidden="true"></i></button>
                </div>
            </div>
            <br />
            <div style={{ marginTop: '50px' }}>
                <h4>All answers</h4>
                <div className="col" >
                    <div class="card">
                        <div class="card-header">
                            Quote
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            Quote
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>A well-known quote, contained in a blockquote element.</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Answers