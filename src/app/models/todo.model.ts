import { Status } from '../enum/status.enum';

export interface Todo {
  createdAt: string;
  description: string;
  id?: number;
  status: Status;
  title: string;
}
