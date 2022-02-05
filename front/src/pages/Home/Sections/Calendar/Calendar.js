import React from "react";

const Calendar = () => {
  return (
    <section id="calendar" className="position-relative pb-100">
      <img src="assets/img/bg-02.svg" className="img" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column mb-4 align-items-center wow bounceInLeft">
            <h1>Qué hacer?</h1>
            <div className="calendar calendar-first" id="calendar_first">
              <div className="calendar_header d-flex justify-content-center align-items-center mb-2">
                <button className="switch-month switch-left">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                    ></path>
                  </svg>
                </button>
                <h2 className="m-0"></h2>
                <button className="switch-month switch-right">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="calendar_weekdays"></div>
              <div className="calendar_content"></div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center d-flex wow bounceInRight">
            <a
              href="#"
              className="big-button today d-flex align-items-center justify-content-center"
            >
              <h1>hoy</h1>
            </a>
            <a
              href="#"
              className="big-button weekend d-flex align-items-center justify-content-center"
            >
              <h1>el finde</h1>
            </a>
            <a
              href="#"
              className="big-button month d-flex align-items-center justify-content-center"
            >
              <h1>este mes</h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
