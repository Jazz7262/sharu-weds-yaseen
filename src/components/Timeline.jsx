import React, { useCallback } from "react";
import "../styles/Timeline.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import timelineParticlesConfig from "../ts-particles-config-files/timeline-particles-config";

function Timeline() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        // <section id="timeline">
        //     <Particles
        //         id="timeline-ts-particles"
        //         init={particlesInit}
        //         options={timelineParticlesConfig}
        //     ></Particles>
        //     <div className="single-timeline">
        //         <h1 className="inshaallaah">Inshaallaah ...</h1>

        //         <div
        //             className="wrapper"
        //             data-aos="fade-up"
        //             data-aos-delay="100"
        //         >
        //             <div className="content">
        //                 <h1>Engagement Ceremony</h1>
        //                 <p>
        //                     On Thursday, 13<sup>th</sup> July, 2023,
        //                     <br />
        //                     24<sup>th</sup> Zil-Hajjah, 1445 Hijri,
        //                     <br />
        //                     After Namaaz -e- Zohar,
        //                     <br />
        //                     Time: 02:00 PM.
        //                 </p>
        //                 <h2>Venue:</h2>
        //                 <p>
        //                     International Function Hall,
        //                     <br /> 3<sup>rd</sup> road, SKD Colony,
        //                     <br /> Adoni.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section id="timeline">
            <Particles
                id="timeline-ts-particles"
                init={particlesInit}
                options={timelineParticlesConfig}
            ></Particles>
            <div className="multi-timeline">
                <h1 className="inshaallaah">Inshaallaah ...</h1>
                <div className="wrapper">
                    {/* shukrana included */}
                    <>
                        <div className="row">
                            <div className="col-lg-6 left" data-aos="fade-down">
                                <h1>Shukrana</h1>
                                <p>
                                    On Thurday, 20<sup>th</sup> July, 2023.
                                    <br />
                                    01<sup>st</sup> Muharram-ul-Haraam, 1445
                                    Hijri,
                                    <br />
                                    Time: 08:30 PM.
                                </p>
                            </div>
                            <div
                                className="col-lg-6 right"
                                data-aos="fade-down"
                            ></div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            ></div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                            >
                                <h1>Nikaah</h1>
                                <p>
                                    On Friday, 21<sup>st</sup> July, 2023,
                                    <br />
                                    02<sup>nd</sup> Muharram-ul-Haraam, 1445
                                    Hijri,
                                    <br />
                                    After Namaz -e- Jumaah,
                                    <br /> Time: 01:30 PM.
                                </p>

                                <h2>Venue:</h2>
                                <p>
                                    MAsjid -e- Shekhan,
                                    <br /> Near Yemmiganur By-pass Road,
                                    <br /> Tirumala Nagar,
                                    <br /> Adoni.
                                </p>

                                <h2>Lunch Follows:</h2>
                                <p>
                                    Roshan Garden,
                                    <br /> Near Art's College,
                                    <br /> Yemmiganur Road,
                                    <br /> Tirumala Nagar,
                                    <br /> Adoni.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-lg-6 left next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            >
                                <h1>Valima</h1>

                                <p>
                                    On Sunday, 23<sup>rd</sup> July, 2023,
                                    <br />
                                    04<sup>th</sup> Muharram-ul-Haraam, 1445
                                    Hijri,
                                    <br />
                                    Time: 02:00 PM.
                                </p>

                                <h2>Venue:</h2>
                                <p>
                                    Imperial Garden Convention Hall,
                                    <br /> Sunkesula Road,
                                    <br /> Kurnool.
                                </p>
                            </div>
                            <div
                                className="col-lg-6 right next"
                                data-aos="fade-down"
                                data-aos-offset="200"
                                data-aos-delay="100"
                            ></div>
                        </div>
                    </>
                    {/* shukrana excluded */}
                    {/* <>
        //                 <div className="row">
        //                     <div
        //                         className="col-lg-6 left next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                     >
        //                         <h1>Nikaah</h1>
        //                         <p>
        //                             On Saturday, 24<sup>th</sup> July, 2023,
        //                             <br />
        //                             06<sup>th</sup> Muharram-ul-Haraam, 1445 Hijri,
        //                             <br />
        //                             Time: 11:45 AM.
        //                         </p>

        //                         <h2>Venue:</h2>
        //                         <p>
        //                             St. Anthony Function Hall,
        //                             <br /> St. Joseph School Road,
        //                             <br /> Bellari.
        //                         </p>
        //                     </div>
        //                     <div
        //                         className="col-lg-6 right next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                     ></div>
        //                 </div>
        //                 <div className="row">
        //                     <div
        //                         className="col-lg-6 left next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                         data-aos-delay="100"
        //                     ></div>
        //                     <div
        //                         className="col-lg-6 right next"
        //                         data-aos="fade-down"
        //                         data-aos-offset="200"
        //                         data-aos-delay="100"
        //                     >
        //                         <h1>Valima</h1>
        //                         <p>
        //                             On Sunday, 25<sup>th</sup> July, 2023,
        //                             <br />
        //                             07<sup>th</sup> Muharram-ul-Haraam, 1445 Hijri,
        //                             <br />
        //                             Time: 01:00 PM.
        //                         </p>
        //                         <h2>Venue:</h2>
        //                         <p>
        //                             Karnataka Function Hall,
        //                             <br /> Hospet Road,
        //                             <br /> Bellari.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </> */}
                </div>
            </div>
        </section>
    );
}

export default Timeline;
