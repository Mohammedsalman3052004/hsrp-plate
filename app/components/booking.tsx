"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import "../css/booking.css"; 

interface Vehicle {
  id: string;
  type: string;
  number: string;
}

interface FormData {
  name: string;
  mobile: string;
  vehicles: Vehicle[];
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    vehicles: [{ id: "1", type: "", number: "" }],
  });
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const addVehicle = () => {
    // Only allow adding if we have less than 2 vehicles
    if (formData.vehicles.length < 2) {
      const newVehicle: Vehicle = {
        id: Date.now().toString(),
        type: "",
        number: "",
      };
      setFormData((prev) => ({
        ...prev,
        vehicles: [...prev.vehicles, newVehicle],
      }));
    }
  };

  const removeVehicle = (id: string) => {
    // Only allow removing if we have more than 1 vehicle
    if (formData.vehicles.length > 1) {
      setFormData((prev) => ({
        ...prev,
        vehicles: prev.vehicles.filter((v) => v.id !== id),
      }));
    }
  };

  const updateVehicle = (id: string, field: keyof Vehicle, value: string) => {
    if (field === 'number') {
      // Convert to uppercase and remove spaces for vehicle numbers
      value = value.toUpperCase().replace(/\s/g, '');
    }
    
    setFormData((prev) => ({
      ...prev,
      vehicles: prev.vehicles.map((v) =>
        v.id === id ? { ...v, [field]: value } : v
      ),
    }));
  };

  // Handle mobile number input - only numbers allowed
  const handleMobileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
    if (value.length <= 10) {
      setFormData({ ...formData, mobile: value });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate mobile number
    if (formData.mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);

    // Get fresh data from form state
    const currentVehicles = [...formData.vehicles];
    
    // Debug: Log current state before submission
    console.log("=== FORM SUBMISSION DEBUG ===");
    console.log("Current form data:", formData);
    console.log("Current vehicles array:", currentVehicles);
    console.log("Vehicles count:", currentVehicles.length);
    
    if (currentVehicles[0]) {
      console.log("Vehicle 1:", currentVehicles[0]);
    }
    if (currentVehicles[1]) {
      console.log("Vehicle 2:", currentVehicles[1]);
    }

    // Replace with your Google Apps Script URL
    const url = "https://script.google.com/macros/s/AKfycbxxTEQpHR9cF9OgJyp-M_8Kc-LZ3XxgVwoHpahBTuZXrBYbN9zCf3cbAa1YNogDW_Wjwg/exec";

    // Build payload step by step for better debugging
    let payload = `Name=${encodeURIComponent(formData.name)}&MobileNumber=${encodeURIComponent(formData.mobile)}`;
    
    // Vehicle 1 data
    const vehicle1 = currentVehicles[0];
    const vehicle1Type = vehicle1?.type || '';
    const vehicle1Number = vehicle1?.number?.trim() || '';
    
    payload += `&Type=${encodeURIComponent(vehicle1Type)}&VehicleNumber=${encodeURIComponent(vehicle1Number)}`;
    
    console.log("Vehicle 1 Type:", vehicle1Type);
    console.log("Vehicle 1 Number:", vehicle1Number);
    
    // Vehicle 2 data
    const vehicle2 = currentVehicles[1];
    const vehicle2Type = vehicle2?.type || '';
    const vehicle2Number = vehicle2?.number?.trim() || '';
    
    payload += `&Type2=${encodeURIComponent(vehicle2Type)}&VehicleNumber2=${encodeURIComponent(vehicle2Number)}`;
    
    console.log("Vehicle 2 Type:", vehicle2Type);
    console.log("Vehicle 2 Number:", vehicle2Number);
    console.log("Final payload:", payload);
    console.log("========================");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload,
      });

      const result = await response.text();
      console.log("Google Sheets response:", result);

      // Show success popup
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      
      // Reset form to initial state
      setFormData({
        name: "",
        mobile: "",
        vehicles: [{ id: "1", type: "", number: "" }],
      });

    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" id="booking">
      {/* Simple Success Popup */}
      {showPopup && (
        <div className="success-popup-overlay">
          <div className="success-popup-card">
            <div className="success-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#10B981"/>
                <path d="m9 12 2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="success-title">Form Submitted Successfully!</h3>
            <p className="success-message">
              We will contact you soon.
            </p>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="form">
        <h2 className="heading">HSRP Plates Booking</h2>

        <div className="input-group">
          <label className="label">
            Name: <span className="required">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="input"
            placeholder="Enter your full name"
          />
        </div>

        <div className="input-group">
          <label className="label">
            Phone No: <span className="required">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleMobileChange}
            required
            className="input"
            placeholder="Enter 10-digit mobile number"
            maxLength={10}
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit mobile number"
          />
          {formData.mobile && formData.mobile.length < 10 && (
            <small className="error-text">Mobile number must be 10 digits</small>
          )}
        </div>

        {formData.vehicles.map((vehicle, index) => (
          <div key={vehicle.id} className="vehicle-group">
            <label className="label">
              Vehicle {index + 1}: {index === 0 && <span className="required">*</span>}
              {index > 0 && <span className="optional">(Optional)</span>}
            </label>
            
            <div className="vehicle-inputs">
              <select
                name={`type${index + 1}`}
                value={vehicle.type}
                onChange={(e) =>
                  updateVehicle(vehicle.id, "type", e.target.value)
                }
                className="select"
                required={index === 0}
              >
                <option value="">Select Type</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
              </select>

              <input
                type="text"
                name={`vehicleNumber${index + 1}`}
                value={vehicle.number}
                onChange={(e) =>
                  updateVehicle(vehicle.id, "number", e.target.value)
                }
                className="input vehicle-number-input"
                placeholder="Enter vehicle number"
                required={index === 0}
              />

              {index === 0 ? (
                <button
                  type="button"
                  onClick={addVehicle}
                  className="add-button"
                  disabled={formData.vehicles.length >= 2}
                >
                  + Add Vehicle
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => removeVehicle(vehicle.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}

        <div className="center">
          <button 
            type="submit" 
            className={`submit-button ${loading ? 'loading' : ''}`} 
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="button-spinner"></div>
                Submitting...
              </>
            ) : (
              "Submit Booking"
            )}
          </button>
        </div>
      </form>

      <style jsx>{`
        .success-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-out;
          padding: 1rem;
        }

        .success-popup-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 350px;
          width: 100%;
          animation: slideUp 0.3s ease-out;
        }

        .success-icon {
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }

        .success-title {
          color: #065f46;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
        }

        .success-message {
          color: #374151;
          margin: 0;
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .required {
          color: #ef4444;
        }

        .optional {
          color: #6b7280;
          font-size: 0.8rem;
        }

        .error-text {
          color: #ef4444;
          font-size: 0.8rem;
          margin-top: 0.25rem;
          display: block;
        }

        .vehicle-inputs {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .vehicle-number-input {
          text-transform: uppercase;
        }

        .submit-button {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .submit-button.loading {
          background: #9ca3af;
          cursor: not-allowed;
        }

        .submit-button:not(.loading):hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .button-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid #ffffff;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          display: inline-block;
          margin-right: 8px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .success-popup-card {
            margin: 1rem;
            padding: 1.25rem;
          }
          
          .success-title {
            font-size: 1rem;
          }
          
          .success-message {
            font-size: 0.85rem;
          }
          
          .vehicle-inputs {
            flex-direction: column;
            align-items: stretch;
          }
          
          .vehicle-inputs button {
            margin-top: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .success-popup-overlay {
            padding: 0.5rem;
          }
          
          .success-popup-card {
            padding: 1rem;
          }
          
          .success-icon svg {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
}