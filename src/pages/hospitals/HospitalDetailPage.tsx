import { useParams, useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { getHospital } from '../../api/hospitals';
import PageHeader from '../../components/PageHeader';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

export default function HospitalDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: hospital, loading, error } = useApi(() => getHospital(id!), [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Hospital Details" subtitle={`View details for ${hospital?.name}`} action={<button className="btn btn-primary" onClick={() => navigate('/hospitals')}>Back</button>} />
      <div className="card bg-base-100 shadow-md p-6">
        <div>
          <div>
            <p className='font-bold'>Name:</p>
            <p>{hospital?.name}</p>
          </div>
          <div>
            <p className='font-bold'>Address:</p>
            <p>{hospital?.address}</p>
          </div>
          <div>
            <p className='font-bold'>Phone:</p>
            <p>{hospital?.phone}</p>
          </div>
          <div>
            <p className='font-bold'>Emergency Available:</p>
            <p>{hospital?.emergency_available !== undefined ? (hospital.emergency_available ? 'Yes' : 'No') : 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}