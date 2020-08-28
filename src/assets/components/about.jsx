import React from 'react';

export default () => {
    return (
        <section class="page-section bg-secondary text-white mb-0" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="page-section-heading d-inline-block text-white">ABOUT</h2>
                </div>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ml-auto">
                        <p class="pre-wrap lead">Preflight is an app created by Leonardo Pasanisi. It allows you to quickly and easily calculate Mass & Balance and Performance values for your flight. Just insert a few values and the software will take care of the rest.</p>
                    </div>
                    <div class="col-lg-4 mr-auto">
                        <p class="pre-wrap lead">This software & its creators shall not be liable for any damages incurred by the user. This software is informational only and should not substitute any official aircraft documents. Use at your own risk!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}