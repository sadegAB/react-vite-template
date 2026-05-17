export interface WorkingHours {
  day_of_week: string;
  is_open: boolean;
  open_time: string;
  close_time: string;
}

export interface HospitalCreate {
  name: string;
  address: string;
  phone: string;
  emergency_available: boolean;
  working_hours: WorkingHours[];
}

export interface Hospital extends HospitalCreate {
  id: string;
  created_at?: string;
  updated_at?: string;
}