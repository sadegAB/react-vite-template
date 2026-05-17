import React, { useState } from 'react';
import { useMutation } from '../../hooks/useMutation';
import { createHospital } from '../../api/hospitals';
import PageHeader from '../../components/PageHeader';
import FormField from '../../components/FormField';
import ErrorMessage from '../../components/ErrorMessage';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useNavigate } from 'react-router-dom';

export default function HospitalCreatePage() {
  const navigate = useNavigate();
  const { loading, error, mutate } = useMutation(createHospital);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    emergency_available: false,
    working_hours: [{ day_of_week: '', is_open: false, open_time: '', close_time: '' }]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('working_hours.')) {
      const [, indexStr, field] = name.split('.');
      const index = parseInt(indexStr, 10);
      handleWorkingHoursChange(index, field, type === 'checkbox' ? checked : value);
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleWorkingHoursChange = (index: number, field: string, value: any) => {
    const updatedWorkingHours = formData.working_hours.map((hour, i) =>
      i === index ? { ...hour, [field]: value } : hour
    );
    setFormData({ ...formData, working_hours: updatedWorkingHours });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData, () => navigate('/hospitals'));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Create Hospital" subtitle="Add a new hospital" />
      <form onSubmit={handleSubmit} className="card bg-base-100 p-8">
        <FormField label="Name">
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="input input-bordered w-full" />
        </FormField>
        <FormField label="Address">
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="input input-bordered w-full" />
        </FormField>
        <FormField label="Phone">
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="input input-bordered w-full" />
        </FormField>
        <FormField label="Emergency Available">
          <input type="checkbox" name="emergency_available" checked={formData.emergency_available} onChange={handleChange} className="toggle toggle-primary" />
        </FormField>
        <FormField label="Working Hours">
          {formData.working_hours.map((hour, index) => (
            <div key={index} className="flex space-x-4 mb-4">
              <input type="text" name={`working_hours.${index}.day_of_week`} value={hour.day_of_week} onChange={handleChange} placeholder="Day" className="input input-bordered w-full" />
              <input type="checkbox" name={`working_hours.${index}.is_open`} checked={hour.is_open} onChange={handleChange} className="toggle toggle-primary" />
              <input type="time" name={`working_hours.${index}.open_time`} value={hour.open_time} onChange={handleChange} className="input input-bordered w-full" />
              <input type="time" name={`working_hours.${index}.close_time`} value={hour.close_time} onChange={handleChange} className="input input-bordered w-full" />
            </div>
          ))}
        </FormField>
        {error && <ErrorMessage message={error} />}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? <LoadingSpinner /> : 'Create Hospital'}
        </button>
      </form>
    </div>
  );
}
