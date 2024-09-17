import React from 'react';


const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
           <div className="container mx-auto px-6">
                <h2 className="section-heading text-3xl font-bold text-start mb-12">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="card bg-white rounded-lg p-6 text-center">
                        <i className="fas fa-palette text-4xl text-indigo-600 mb-4"></i>
                        <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
                        <p className="text-gray-600">Unlock valuable insights from your data using advanced analytics and visualization techniques to drive informed business decisions.</p>
                    </div>
                    <div className="card bg-white rounded-lg p-6 text-center">
                        <i className="fas fa-calculator text-4xl text-indigo-600 mb-4"></i>
                        <h3 className="text-xl font-bold mb-2">Mobile Application Development</h3>
                        <p className="text-gray-600">Developing high-quality, responsive mobile applications that enhance user engagement and meet your business needs.</p>
                    </div>
                    <div className="card bg-white rounded-lg p-6 text-center">
                        <i className="fas fa-code text-4xl text-indigo-600 mb-4"></i>
                        <h3 className="text-xl font-bold mb-2">Javascript Development</h3>
                        <p className="text-gray-600">Creating dynamic, interactive web applications using modern JavaScript frameworks to deliver seamless user experiences.</p>
                    </div>
                    <div className="card bg-white rounded-lg p-6 text-center">
                        <i className="fas fa-chart-line text-4xl text-indigo-600 mb-4"></i>
                        <h3 className="text-xl font-bold mb-2">Video Editing</h3>
                        <p className="text-gray-600">Crafting professional video content through editing, motion graphics, and post-production to bring your vision to life.</p>
                    </div>
                    <div className="card bg-white rounded-lg p-6 text-center">
                        <i className="fas fa-camera text-4xl text-indigo-600 mb-4"></i>
                        <h3 className="text-xl font-bold mb-2">Photography</h3>
                        <p className="text-gray-600">Capturing stunning visuals and moments through professional photography services tailored to your needs.</p>
                    </div>
                </div>
            </div>
    </section>
  );
}

export default Services;