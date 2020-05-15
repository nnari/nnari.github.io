import React from 'react'

export const Contact = () => {
    return (
        <section class="contact-section bg-black" id="contact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Location</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50">Keinusaari, Hämeenlinna</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Email</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50"><a href="#!">tatu@farmatools.fi</a></div>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="https://twitter"><i class="fab fa-twitter"></i></a>
                    <a class="mx-2" href="https://github.com/nnari"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </section>
    )
}
