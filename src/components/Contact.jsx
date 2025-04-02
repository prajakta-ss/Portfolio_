import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      await axios.post("https://getform.io/f/bjjmvorb", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <Toaster />
      <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-16 mt-16'>
        <h3 className='text-3xl font-bold mb-5'>Contact me</h3>
        <span>Please fill out the form below to contact me</span>
        <div className='flex justify-center items-center'>
          <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 w-96 px-8 py-6 rounded-lg shadow-lg'>
            <h1 className='text-xl font-semibold mb-4'>Send your message</h1>

            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700'>Full Name</label>
              <input {...register("name", { required: true })} type="text" placeholder='Enter your full name' className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>

            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700'>Email address</label>
              <input {...register("email", { required: true })} type="email" placeholder='Enter your Email address' className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>

            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700'>Message</label>
              <textarea {...register("message", { required: true })} placeholder='Type your Query' className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
              {errors.message && <span className="text-red-500">This field is required</span>}
            </div>

            <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
