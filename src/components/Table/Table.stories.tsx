import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { useState } from 'react';
import type { TableColumn } from './types';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
    lastLogin: string;
}

const mockUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', lastLogin: '2024-01-30' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active', lastLogin: '2024-01-29' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'inactive', lastLogin: '2024-01-25' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'active', lastLogin: '2024-01-28' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'inactive', lastLogin: '2024-01-20' },
];

const columns: TableColumn<User>[] = [
    {
        id: 'name',
        header: 'Name',
        accessor: row => row.name,
        sortable: true,
        tooltip: 'Click to sort by name'
    },
    {
        id: 'email',
        header: 'Email',
        accessor: row => row.email,
        wrap: true,
        cellTooltip: (value) => `Send email to ${value}`
    },
    {
        id: 'role',
        header: 'Role',
        accessor: row => row.role,
        align: 'center',
        tooltip: 'User permission level'
    },
    {
        id: 'status',
        header: 'Status',
        accessor: row => row.status,
        Cell: ({ value }) => (
            <span style={{
                padding: '0.25rem 0.5rem',
                borderRadius: '9999px',
                backgroundColor: value === 'active' ? '#dcfce7' : '#fee2e2',
                color: value === 'active' ? '#166534' : '#991b1b',
                fontSize: '0.875rem'
            }}>
                {value}
            </span>
        ),
        align: 'center',
        tooltip: 'Account status'
    },
    {
        id: 'lastLogin',
        header: 'Last Login',
        accessor: row => row.lastLogin,
        align: 'right',
        cellTooltip: (value) => `Last seen on ${value}`
    }
];

const meta = {
    title: 'Components/Table',
    component: Table<User>,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A flexible data table component with sorting, pagination, and selection capabilities.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        data: { control: 'object' },
        columns: { control: 'object' },
        pagination: { control: 'boolean' },
        pageSize: { control: 'number' },
        sortable: { control: 'boolean' },
        selectable: { control: 'boolean' },
        selectionStyle: {
            control: 'select',
            options: ['checkbox', 'highlight']
        },
        hoverable: { control: 'boolean' },
        striped: { control: 'boolean' },
        bordered: { control: 'boolean' },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large']
        },
        loading: { control: 'boolean' }
    }
} satisfies Meta<typeof Table<User>>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic table
export const Basic: Story = {
    args: {
        data: mockUsers,
        columns,
        hoverable: true
    }
};

// Table with pagination
export const WithPagination: Story = {
    args: {
        data: mockUsers,
        columns,
        pagination: true,
        pageSize: 3,
        hoverable: true
    }
};

// Table with sorting
export const WithSorting: Story = {
    args: {
        data: mockUsers,
        columns,
        sortable: true,
        hoverable: true
    }
};

// Table with checkbox selection
export const WithCheckboxSelection: Story = {
    args: {
        data: mockUsers,
        columns,
        selectable: true,
        selectionStyle: 'checkbox',
        hoverable: true
    }
};

// Table with row selection
export const WithRowSelection: Story = {
    args: {
        data: mockUsers,
        columns,
        selectable: true,
        selectionStyle: 'highlight',
        hoverable: true
    }
};

// Table with loading state
export const Loading: Story = {
    args: {
        data: mockUsers,
        columns,
        loading: true,
        hoverable: true
    }
};

// Table sizes
export const Sizes: Story = {
    args: {
        data: mockUsers.slice(0, 3),
        columns,
        hoverable: true
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Table<User>
                {...args}
                size="small"
            />
            <Table<User>
                {...args}
                size="medium"
            />
            <Table<User>
                {...args}
                size="large"
            />
        </div>
    )
};

// Interactive example
export const Interactive: Story = {
    args: {
        data: mockUsers,
        columns,
        pagination: true,
        pageSize: 3,
        sortable: true,
        selectable: true,
        selectionStyle: 'checkbox',
        hoverable: true,
        striped: true,
        bordered: true,
        size: 'medium',
        loading: false
    }
};
