import React from 'react';

const Calendar = () => {
    return (
        <section id="calendar" className="position-relative pb-100">
            <img src="assets/img/bg-02.svg" className="img" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 wow bounceInLeft">
                        <h1 className="Grifter fs-52">Qué hacer?</h1>
                    </div>
                    <div className="col-md-6 d-flex wow bounceInRight">
                        <a href="#" className="big-button today d-flex align-items-center justify-content-center">
                            <h1>hoy</h1>
                        </a>
                        <a href="#" className="big-button weekend d-flex align-items-center justify-content-center">
                            <h1>el finde</h1>
                        </a>
                        <a href="#" className="big-button month d-flex align-items-center justify-content-center">
                            <h1>este mes</h1>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calendar;