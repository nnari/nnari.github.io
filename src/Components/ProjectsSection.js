import React from 'react'
import moment from 'moment'


export const ProjectsSection = () => {

    

    return (
        <section class="projects-section bg-light" id="projects">
            <div class="container">
                <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="assets/img/selfie.jpg" alt="" /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>Who am I?</h4>
                            <p class="text-black-50 mb-0">Hi! I'm a {moment().diff('01-08-1997', 'years')} years old photographer & software developer from Hämeenlinna.</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div class="col-lg-6"><img class="img-fluid" src="assets/img/nightphoto.jpg" alt="" /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Night & street photography</h4>
                                    <p class="mb-0 text-white-50">Experimenting with portraits aswell. I'm available for fun photoshoots, just contact me!</p>
                                    <hr class="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center no-gutters">
                    <div class="col-lg-6"><img class="img-fluid" src="assets/img/softwaredev.jpg" alt="" /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Software development</h4>
                                    <p class="mb-0 text-white-50">JavaScript developer familiar with <b>ReactJS</b> and writing APIs with <b>Express</b>.
                                    I also have a solid foundation in working with C#, MongoDB, MySQL and I'm generally very tech-savvy.</p>
                                    <hr class="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
