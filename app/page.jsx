'use client';
import Image from "next/image";

import { FaUserCheck } from 'react-icons/fa';
import { HiOutlineServer } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaBullhorn, FaStar, FaClipboardCheck, FaChartBar, FaSmile, FaHeadset, FaLayerGroup, FaHeart, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {

  const steps = [
    {
      icon: <FaUserCheck className="text-blue-500 text-4xl" />,
      title: 'Create an Account',
      description: 'Sign up on Beezinfo to get started.'
    },
    {
      icon: <HiOutlineServer className="text-green-500 text-4xl" />,
      title: 'Build Your Profile',
      description: 'Showcase your business and its offerings to potential customers.'
    },
    {
      icon: <MdLocationOn className="text-red-500 text-4xl" />,
      title: 'List Your Business for Free',
      description: 'Reach out to customers at no cost and start growing your visibility.'
    },
    {
      icon: <AiOutlineUsergroupAdd className="text-yellow-500 text-4xl" />,
      title: 'Connect with Customers',
      description: 'Use our platform to build strong relationships and drive customer engagement.'
    }
  ];

  const features = [
    { icon: <FaBullhorn size={30} />, title: 'Provide Free Listing', description: 'Get your business listed for free and reach a wide audience effortlessly.' },
    { icon: <FaStar size={30} />, title: 'Best Ads Ratings', description: 'Boost your visibility with the best ad ratings on our platform.' },
    { icon: <FaClipboardCheck size={30} />, title: 'Post Failure Alerts', description: 'Get notified of any posting issues to ensure seamless updates.' },
    { icon: <FaChartBar size={30} />, title: 'Track Ad Progress', description: 'Monitor your ad performance and adjust strategies for better results.' },
    { icon: <FaSmile size={30} />, title: 'User-Friendly Interface', description: 'Our platform is designed for simplicity, making it easy for anyone to use.' },
    { icon: <FaHeadset size={30} />, title: '24/7 Support', description: 'Our dedicated support team is here to assist you round the clock.' },
  ];

  const stats = [
    { icon: <FaLayerGroup size={30} />, title: 'Total Listings', count: 0 },
    { icon: <FaHeart size={30} />, title: 'Featured Listings', count: 0 },
    { icon: <FaUsers size={30} />, title: 'Our Clients', count: 0 },
    { icon: <FaSmile size={30} />, title: 'Happy Customer', count: 0 },
  ];

  return (
    <>
      <section className="bg-gray-100 py-12 px-6 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-8">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-700 transition">About Us</h2>
            <p className="text-base mt-4 text-gray-700 text-justify">
              At Beezinfo, we are dedicated to connecting businesses with customers
              through a reliable and user-friendly platform. By providing a
              comprehensive online business directory, we simplify the process of
              discovering and connecting businesses and customers across various industries.
            </p>
            <p className="text-base mt-4 text-gray-700 text-justify">
              Our mission is to enhance business visibility, foster meaningful
              customer engagement, and drive economic growth. Through the
              integration of innovative technology and data management, we strive
              to create a seamless experience for both businesses and consumers.
            </p>

            {/* Bullet List with Dots */}
            <ul className="mt-4 list-disc list-inside text-gray-900 space-y-2 pl-4 text-justify">
              <li>
                <strong>Simplified Business Profiles:</strong> We enable businesses
                to create profiles that highlight their offerings, making it easier
                for customers to find them.
              </li>
              <li>
                <strong>Targeted Marketing Campaigns:</strong> We empower businesses
                to reach their desired audience through customized marketing solutions.
              </li>
              <li>
                <strong>Partnerships with Associations:</strong> Collaborating with
                local business associations and chambers of commerce to ensure wider
                business reach.
              </li>
              <li>
                <strong>Enhanced Business Visibility:</strong> Using advanced
                technology, we help businesses maximize their growth potential and
                customer reach.
              </li>
            </ul>

            <button class="mt-6 bg-blue-600 text-white border border-blue-600 px-6 py-2 rounded-md shadow-md transition duration-300 transform hover:bg-transparent hover:text-blue-600 hover:scale-105">
              View More
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src="https://beezinfo.com/img/about/beez-about/Green%20White%20Watercolor%20Leaf%20Page%20Border%20A3%20Landscape.png"
              alt="About Us"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

      </section>

      <section className="text-center py-12 px-6 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-8 hover:text-blue-700 transition">How It Works?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-gray-100 p-6 rounded-full shadow-lg shadow-blue-400 transform active:translate-y-1 active:shadow-none transition-all duration-200 hover:scale-110">{step.icon}</div>
              <h3 className="font-bold text-lg mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative h-[45vh] flex items-center justify-center">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://beezinfo.com/img/about/free-post-add-sec/banner5.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 hover:text-blue-700">Ready to Post Your Ads?</h1>
          <p className=" text-white mb-8 ">
            Take the next step to grow your business. Post your ads for free and connect with potential customers today!
          </p>
          <button
            className="
            relative
            bg-blue-500 
            text-white 
            font-semibold 
            py-3 
            px-8 
            rounded-full
            transform
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-[0_8px_0_rgb(29,78,216)]
            active:translate-y-0
            active:shadow-[0_0px_0_rgb(29,78,216)]
            before:content-['']
            before:absolute
            before:inset-0
            before:bg-blue-600
            before:rounded-full
            before:-z-10
            before:translate-y-[6px]
          "
          >
            Free Post Ads
          </button>
        </div>
      </section>
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black hover:text-blue-700 transition mb-2">Why Choose Us?</h2>
        <p className="text-gray-600 mb-8">We provide excellent features to help your business grow and connect with the right audience.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            let initialAnimation = {};
            if (index % 3 === 0) initialAnimation = { opacity: 0, x: -100 };
            else if (index % 3 === 2) initialAnimation = { opacity: 0, x: 100 };
            else if (index === 1) initialAnimation = { opacity: 0, y: -100 };
            else if (index === 4) initialAnimation = { opacity: 0, y: 100 };
            else initialAnimation = { opacity: 0, y: 50 };

            return (
              <motion.div
                key={index}
                initial={initialAnimation}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
                className="bg-[#f5bb94] p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full mb-4 text-blue-500">{feature.icon}</div>
                <h3 className="font-bold text-lg hover:text-blue-700">{feature.title}</h3>
                <p className="text-gray-700 mt-2">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative h-[50vh] flex items-center justify-center">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://beezinfo.com/img/about/free-post-add-sec/banner5.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 ">
          <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: 360 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
                className="bg-[#f5bb94] p-10 shadow-md flex flex-col items-center text-center w-[19rem] rounded-xl">
                <div className="bg-white p-4 rounded-full mb-4 text-blue-500 shadow">{stat.icon}</div>
                <h3 className="font-bold text-lg">{stat.title}</h3>
                <p className="text-2xl font-bold text-white mt-2">{stat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold hover:text-blue-700 transition">Subscribe To Our Newsletter</h1>
          <div>
            <input type="text" placeholder="Enter Your Name" className="mt-7 w-1/2 h-14 focus:outline-none focus:ring-0 border border-gray-300 pl-4 peer"/>
            <button className="bg-[#ed7d31] text-white h-14 px-12 rounded-tr-[5px] rounded-br-[5px]">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}
