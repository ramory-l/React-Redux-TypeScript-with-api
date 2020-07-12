interface Task {
  id: number;
  text: string;
  list_id: number;
  checked: boolean;
  created_at: string;
  updated_at: string;
}

export interface List {
  id: number;
  title: string;
  candidate_id: number;
  created_at: string;
  updated_at: string;
  todos: Task[];
}
