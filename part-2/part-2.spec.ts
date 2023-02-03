//import axios, { AxiosResponse } from 'axios';
import axios from 'axios';

const API_BASE_URL = 'https://api.clickup.com/api/v2.0';
const API_TOKEN = 'pk_54646532_7STX20R3MPRLAL0YR2LRKMQMPRV87PGD';

interface Task {
  id: string;
  name: string;
  description: string;
}

interface Project {
  id: string;
  name: string;
  tasks: Task[];
}

describe('Clickup API', () => {
  it('should return a list of tasks', async () => {
    const response = await axios.get(`${API_BASE_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const tasks = response.data as Task[];
    expect(tasks).toBeDefined();
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should return a specific task', async () => {
    const response = await axios.get(`${API_BASE_URL}/tasks/taskId`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const task = response.data as Task;
    expect(task).toBeDefined();
    expect(task.id).toEqual('taskId');
  });

  it('should return a list of projects', async () => {
    const response = await axios.get(`${API_BASE_URL}/projects`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const projects = response.data as Project[];
    expect(projects).toBeDefined();
    expect(projects.length).toBeGreaterThan(0);
  });

  it('should return a specific project', async () => {
    const response = await axios.get(`${API_BASE_URL}/projects/projectId`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const project = response.data as Project;
    expect(project).toBeDefined();
    expect(project.id).toEqual('projectId');
  });
});
