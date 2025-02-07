import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ThemeToggle } from '../components/ThemeToggle';
import { InfoIcon } from '../components/InfoIcon';
import { Table, TableColumn, SortDirection } from '../components/Table';
import { ThemeProvider } from '../theme';
import { SocialIcons, SocialLink } from '../components/SocialIcons';
import { ConnectWallet, WalletProvider } from '../components/ConnectWallet';

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

interface TableState {
    page: number;
    selectedUsers: number[];
    sortColumn?: string;
    sortDirection: SortDirection;
}

const ExampleContent = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [checkboxTableState, setCheckboxTableState] = useState<TableState>({
        page: 1,
        selectedUsers: [],
        sortDirection: null
    });
    const [highlightTableState, setHighlightTableState] = useState<TableState>({
        page: 1,
        selectedUsers: [],
        sortDirection: null
    });

    // Example social links
    const socialLinks: SocialLink[] = [
        { platform: 'discord' as const, url: 'https://discord.gg/randao' },
        { platform: 'x' as const, url: 'https://x.com/randao' },
        { platform: 'telegram' as const, url: 'https://t.me/randao' },
        { platform: 'reddit' as const, url: 'https://reddit.com/r/randao' },
        { platform: 'youtube' as const, url: 'https://youtube.com/@randao' }
    ];

    // Simulate data loading
    React.useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setUsers(mockUsers);
            setLoading(false);
        };

        loadData();
    }, []);

    // Simulate data refresh
    const handleRefresh = async () => {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setUsers([...mockUsers].reverse());
        setLoading(false);
    };

    const columns: TableColumn<User>[] = [
        {
            id: 'name',
            header: 'Name',
            accessor: row => row.name,
            sortable: true,
            tooltip: 'Sort by name'
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

    return (
        <div style={{
            padding: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '100vh',
            backgroundColor: 'var(--color-background)',
            color: 'var(--color-text)',
            transition: 'var(--theme-transition)'
        }}>
            <header style={{
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <h1>Component Library</h1>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <ConnectWallet size="medium" />
                    <ThemeToggle size="large" />
                </div>
            </header>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Social Icons</h2>
                <div style={{
                    marginTop: '1rem',
                    padding: '2rem',
                    backgroundColor: 'var(--color-grey-100)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <p>Default size (24px):</p>
                    <SocialIcons links={socialLinks} />

                    <p style={{ marginTop: '1rem' }}>Large size (32px):</p>
                    <SocialIcons links={socialLinks} size={32} />
                </div>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                }}>
                    <h2>Data Table with Checkbox Selection</h2>
                    <Button
                        variant="outline"
                        onClick={handleRefresh}
                        disabled={loading}
                    >
                        Refresh Data
                    </Button>
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <Table
                        data={users}
                        columns={columns}
                        pagination
                        pageSize={3}
                        currentPage={checkboxTableState.page}
                        onPageChange={(page) => setCheckboxTableState(prev => ({ ...prev, page }))}
                        sortable
                        initialSortColumn={checkboxTableState.sortColumn}
                        initialSortDirection={checkboxTableState.sortDirection}
                        onSortChange={(column, direction) => setCheckboxTableState(prev => ({
                            ...prev,
                            sortColumn: column,
                            sortDirection: direction
                        }))}
                        selectable
                        selectionStyle="checkbox"
                        selectedRows={checkboxTableState.selectedUsers}
                        onSelectionChange={(selectedKeys) => setCheckboxTableState(prev => ({
                            ...prev,
                            selectedUsers: selectedKeys.map(key => Number(key))
                        }))}
                        hoverable
                        striped
                        bordered
                        size="medium"
                        loading={loading}
                    />
                </div>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2>Data Table with Row Selection</h2>
                <div style={{ marginTop: '1rem' }}>
                    <Table
                        data={users}
                        columns={columns}
                        pagination
                        pageSize={3}
                        currentPage={highlightTableState.page}
                        onPageChange={(page) => setHighlightTableState(prev => ({ ...prev, page }))}
                        sortable
                        initialSortColumn={highlightTableState.sortColumn}
                        initialSortDirection={highlightTableState.sortDirection}
                        onSortChange={(column, direction) => setHighlightTableState(prev => ({
                            ...prev,
                            sortColumn: column,
                            sortDirection: direction
                        }))}
                        selectable
                        selectionStyle="highlight"
                        selectedRows={highlightTableState.selectedUsers}
                        onSelectionChange={(selectedKeys) => setHighlightTableState(prev => ({
                            ...prev,
                            selectedUsers: selectedKeys.map(key => Number(key))
                        }))}
                        hoverable
                        striped
                        bordered
                        size="medium"
                        loading={loading}
                    />
                </div>
            </section>
        </div>
    );
};

const App = () => {
    return (
        <ThemeProvider>
            <WalletProvider>
                <ExampleContent />
            </WalletProvider>
        </ThemeProvider>
    );
};

export default App;
