"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
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

  const addVehicle = () => {
    const newVehicle: Vehicle = {
      id: Date.now().toString(),
      type: "",
      number: "",
    };
    setFormData((prev) => ({
      ...prev,
      vehicles: [...prev.vehicles, newVehicle],
    }));
  };

  const removeVehicle = (id: string) => {
    if (formData.vehicles.length > 1) {
      setFormData((prev) => ({
        ...prev,
        vehicles: prev.vehicles.filter((v) => v.id !== id),
      }));
    }
  };

  const updateVehicle = (id: string, field: keyof Vehicle, value: string) => {
    setFormData((prev) => ({
      ...prev,
      vehicles: prev.vehicles.map((v) =>
        v.id === id ? { ...v, [field]: value } : v
      ),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Submit logic here
  };

  return (
    <div className="container" id="booking">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="heading">HSRP Plates Booking</h2>

        <div className="input-group">
          <label className="label">Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="input"
            placeholder="Enter your name"
          />
        </div>

        <div className="input-group">
          <label className="label">Phone No:</label>
          <input
            type="tel"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            required
            className="input"
            placeholder="Enter your phone number"
          />
        </div>

        {formData.vehicles.map((vehicle, index) => (
          <div key={vehicle.id} className="vehicle-group">
            <label className="label">Vehicle {index + 1}:</label>
            <select
              value={vehicle.type}
              onChange={(e) =>
                updateVehicle(vehicle.id, "type", e.target.value)
              }
              className="select"
              required
            >
              <option value="">Select Type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>

            <input
              type="text"
              value={vehicle.number}
              onChange={(e) =>
                updateVehicle(vehicle.id, "number", e.target.value)
              }
              className="input"
              placeholder="Enter vehicle number"
              required
            />

            {index === 0 ? (
              <button
                type="button"
                onClick={addVehicle}
                className="add-button"
              >
                + Add
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
        ))}

        <div className="center">
          <button type="submit" className="submit-button">
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
} 
