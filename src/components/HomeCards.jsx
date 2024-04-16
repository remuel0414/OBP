import React from 'react'
import Card from './Card';
import {Link} from 'react-router-dom';
const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
          <h2 className="text-2xl font-bold">Request Documents Online</h2>
            <p className="mt-2 mb-4">
            Request city documents online for a convenient way to apply for permits, licenses, and certificates. Submit applications and required documents digitally, make secure online payments, and receive requested documents via download or mail, saving time and avoiding in-person visits.
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse List
            </Link>
          </Card>
          <Card bg ='bg-orange-200'>
          <h2 className="text-2xl font-bold">Track Your Documents</h2>
            <p className="mt-2 mb-4">
            Track the status of your requested city documents online. View updates on your requests and check if your documents are ready for download or mail delivery. Stay informed about processing times and completion dates.
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Item
            </Link>
          </Card>
          </div>
          </div>
    </section>
  );
}

export default HomeCards