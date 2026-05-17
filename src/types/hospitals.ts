export interface HospitalCreate {
  name: string;
  address: string;
  phone: string;
  emergency_available: boolean;
  working_hours: { day_of_week: string; is_open: boolean; open_time: string; close_time: string }[];
}

export interface Hospital extends HospitalCreate {
  id: string;
}