import React from 'react';


const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
           <div class="container mx-auto px-6">
                <h2 class="section-heading text-3xl font-bold text-start mb-12">My Services</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="card bg-white rounded-lg p-6 text-center">
                        <i class="fas fa-palette text-4xl text-indigo-600 mb-4"></i>
                        <h3 class="text-xl font-bold mb-2">Data Analytics</h3>
                        <p class="text-gray-600">Professional graphic design services to bring your ideas to life.</p>
                    </div>
                    <div class="card bg-white rounded-lg p-6 text-center">
                        <i class="fas fa-calculator text-4xl text-indigo-600 mb-4"></i>
                        <h3 class="text-xl font-bold mb-2">Mobile Application Development</h3>
                        <p class="text-gray-600">Comprehensive math tutoring for students at all levels.</p>
                    </div>
                    <div class="card bg-white rounded-lg p-6 text-center">
                        <i class="fas fa-code text-4xl text-indigo-600 mb-4"></i>
                        <h3 class="text-xl font-bold mb-2">Javascript Development</h3>
                        <p class="text-gray-600">Professional web development services to build your online presence.
                        </p>
                    </div>
                    <div class="card bg-white rounded-lg p-6 text-center">
                        <i class="fas fa-chart-line text-4xl text-indigo-600 mb-4"></i>
                        <h3 class="text-xl font-bold mb-2">Video Editing</h3>
                        <p class="text-gray-600">Optimize your website to rank higher in search engine results.</p>
                    </div>
                    <div class="card bg-white rounded-lg p-6 text-center">
                        <i class="fas fa-camera text-4xl text-indigo-600 mb-4"></i>
                        <h3 class="text-xl font-bold mb-2">Photography</h3>
                        <p class="text-gray-600">Capture your moments with professional photography services.</p>
                    </div>
                </div>
            </div>
    </section>
  );
}

export default Services;