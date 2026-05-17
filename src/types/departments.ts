export interface DepartmentCreate {
  name: string;
  hospital_id: string;
}

export interface Department extends DepartmentCreate {
  id: string;
  created_at?: string;
  updated_at?: string;
}