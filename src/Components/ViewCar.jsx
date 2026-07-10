import React from 'react'

const ViewCar = () => {
    return (
        <div>
            <h2 className="text-center p-5">View Cars</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-12 c0l-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..." height="200px" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCar