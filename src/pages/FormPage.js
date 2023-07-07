import React, { useState } from 'react';
import './Form.css'
import Navbar from '../components/Navbar';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';








const FormPage = () => {


  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    file: null,
    files: [],
    geolocation: '',
    formSubmitted: false,
  });



  const countryOptions = [
    { value: 'IN', label: 'India', flag: '🇮🇳' },
    { value: 'US', label: 'United States', flag: '🇺🇸' },
    // Add more country options as needed
  ];

  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({ ...prevState, file }));
  };

  const handleMultiFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevState) => ({ ...prevState, files }));
  };

  const handleGeolocationCapture = () => {
    // Code to capture geolocation
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setFormData((prevState) => ({ ...prevState, geolocation: `Lat: ${latitude}, Long: ${longitude}` }));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission
    setFormData((prevState) => ({ ...prevState, formSubmitted: true }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (

       
          <div>
            <h2>Step 1: Basic Details</h2>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
            {/* <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" /> */}
            <div className="form-group">
            <label>Phone</label>
            {/* <Select
              value={selectedCountry}
              options={countryOptions}
              onChange={(selectedOption) => setSelectedCountry(selectedOption)}
              styles={{
                control: (provided) => ({
                  ...provided,
                  borderRadius: '5px',
                  borderColor: '#ccc',
                }),
              }}
            /> */}
         <PhoneInput
  country="in" // Set the default country code to India
  inputClass="form-control"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={(value) => setFormData((prevState) => ({ ...prevState, phone: value }))}
/>
          </div>
          </div>
        );
      case 2:
        return (
          <div style={{width:'30vw'}}>
            <h2>Step 2: Address</h2>
            <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleInputChange} placeholder="Address Line 1" />
            <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleInputChange} placeholder="Address Line 2" />
            <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" />
            <input type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="State" />
            <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} placeholder="Pincode" />
            <input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder="Country" />
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: File Upload</h2>
            <input type="file" accept=".png,.pdf" onChange={handleFileUpload} />
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Step 4: Multi File Upload</h2>
            <input type="file" multiple accept=".png,.pdf" onChange={handleMultiFileUpload} />
            <button onClick={handleGeolocationCapture}>Capture Geolocation</button>
            {formData.geolocation && <p>Geolocation: {formData.geolocation}</p>}
          </div>
        );
      case 5:
        return (
          <div>
            <h2>Step 5: Status</h2>
            <p>Form submitted: {formData.formSubmitted ? 'Yes' : 'No'}</p>
          </div>
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
    <Navbar />
   
      <div className="login">
      <form onSubmit={handleSubmit} className="loginbox"  style={{padding:'100px 0px '}}>
      <div>
        {renderStepContent()}

        <div>
          {currentStep > 1 && (
            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
          )}

          {currentStep < 5 ? (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          ) : (


            <button type="submit">Submit</button>
          )}

</div>


        </div>
      </form >
        <div className="right-login">
        <img src="	https://lvdigital.cloudflareaccess.com/apps/img/login.1d689067.svg"></img>
      </div>
      </div>
    </div>
  );
};

export default FormPage;









