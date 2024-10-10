import { useQuery, useMutation, useQueryClient } from 'react-query';

const fetchTasks = async () => {
    const response = await fetch('http://localhost:3000/tasks');
    return response.json();
};

export const useTasks = () => {
    return useQuery('tasks', fetchTasks);
};

const addTask = async (newTask) => {
    const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
    });
    return response.json();
};

export const useAddTask = () => {
    const queryClient = useQueryClient();
    return useMutation(addTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
    });
};

const updateTask = async ({ id, updatedTask }) => {
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
    });
    return response.json();
};

export const useUpdateTask = () => {
    const queryClient = useQueryClient();
    return useMutation(updateTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
    });
};

const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE',
    });
};

export const useDeleteTask = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
    });
};

const deleteAllTasks = async () => {
    const tasks = await fetchTasks();
    const deletePromises = tasks.map(task => fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: 'DELETE',
    }));

    await Promise.all(deletePromises);
};

export const useDeleteAllTasks = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteAllTasks, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
    });
};
