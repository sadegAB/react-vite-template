export interface DoctorCreate {
  full_name: string;
  specialization: string;
  working_hours: { day_of_week: string; is_available: boolean; start_time: string; end_time: string }[];
  consultation_fee: number;
  rating: number;
  languages: string[];
  gender: string;
  hospital_id: string;
  department_id: string;
}

export interface Doctor extends DoctorCreate {
  id: string;
  created_at?: string;
  updated_at?: string;
}