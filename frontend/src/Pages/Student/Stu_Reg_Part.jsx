import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Stu_Reg = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
      e.preventDefault()
      try {
        const response = await fetch("http://localhost:3000/api/auth/student-register", {
          method: "POST",
          headers: {"Content-Type" : "application/json",},
          body: JSON.stringify(formData),
        })

        if(response.ok){
          const responsedata = await response.json()
          setFormData({
            firstname: '',
            lastname:'',
            email: '',
            password: '',
            confirmPassword: '',
          })
          console.log(responsedata)
          navigate("/")
        }

      } catch (error) {
        console.log(error)
      }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-900 py-8">
      <div className="w-full max-w-md bg-gray-800 text-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-400">First Name *</label>
              <input
                className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                type="text"
                name="firstname"
                placeholder="Enter first name"
                value={formData.firstname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-400">Last Name *</label>
              <input
                className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                type="text"
                name="lastname"
                placeholder="Enter last name"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm font-semibold text-gray-400">Email Address *</label>
            <input
              className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex space-x-2">
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-400">Create Password *</label>
              <div className="relative">
                <input
                  className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="text-sm font-semibold text-gray-400">Confirm Password *</label>
              <div className="relative">
                <input
                  className="w-full p-3 border border-gray-600 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                
              </div>
            </div>
          </div>

          <button
            className="w-full bg-yellow-500 text-gray-800 p-3 rounded font-bold hover:bg-yellow-600 transition-colors"
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};