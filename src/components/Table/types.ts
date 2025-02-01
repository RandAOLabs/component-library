import { ReactNode } from 'react';

export type CellAlignment = 'left' | 'center' | 'right';
export type SortDirection = 'asc' | 'desc' | null;

export interface TableColumn<T> {
    /** Unique identifier for the column */
    id: string;
    /** Header text or component */
    header: ReactNode;
    /** Function to get the cell value from a row */
    accessor: (row: T) => any;
    /** Optional cell renderer */
    Cell?: (props: { value: any; row: T }) => ReactNode;
    /** Optional tooltip content for the header */
    tooltip?: ReactNode;
    /** Optional tooltip content for cells */
    cellTooltip?: (value: any, row: T) => ReactNode;
    /** Optional minimum width in pixels */
    minWidth?: number;
    /** Optional maximum width in pixels */
    maxWidth?: number;
    /** Optional fixed width in pixels */
    width?: number;
    /** Text alignment within cells */
    align?: CellAlignment;
    /** Whether the column is sortable */
    sortable?: boolean;
    /** Whether to enable text wrapping */
    wrap?: boolean;
    /** Whether the column can be resized */
    resizable?: boolean;
    /** Whether to stick the column to the left */
    stickyLeft?: boolean;
    /** Whether to stick the column to the right */
    stickyRight?: boolean;
}

export interface TableProps<T extends object> {
    /** Array of data objects */
    data: T[];
    /** Array of column definitions */
    columns: TableColumn<T>[];
    /** Optional key function to get unique row identifier */
    getRowKey?: (row: T) => string | number;
    /** Whether to enable pagination */
    pagination?: boolean;
    /** Number of rows per page when pagination is enabled */
    pageSize?: number;
    /** Current page number (1-based) */
    currentPage?: number;
    /** Callback when page changes */
    onPageChange?: (page: number) => void;
    /** Whether to enable sorting */
    sortable?: boolean;
    /** Initial sort column id */
    initialSortColumn?: string;
    /** Initial sort direction */
    initialSortDirection?: SortDirection;
    /** Callback when sort changes */
    onSortChange?: (columnId: string, direction: SortDirection) => void;
    /** Whether to enable column resizing */
    resizable?: boolean;
    /** Whether to enable row selection */
    selectable?: boolean;
    /** Style of row selection */
    selectionStyle?: 'checkbox' | 'highlight';
    /** Currently selected row keys */
    selectedRows?: (string | number)[];
    /** Callback when selection changes */
    onSelectionChange?: (selectedKeys: (string | number)[]) => void;
    /** Whether to show a loading state */
    loading?: boolean;
    /** Text to show when there is no data */
    emptyText?: ReactNode;
    /** Optional className for custom styling */
    className?: string;
    /** Optional inline styles */
    style?: React.CSSProperties;
    /** Whether to enable zebra striping */
    striped?: boolean;
    /** Whether to show hover effect on rows */
    hoverable?: boolean;
    /** Whether to make the header sticky */
    stickyHeader?: boolean;
    /** Height of the table in pixels (enables vertical scrolling) */
    height?: number;
    /** Whether to enable horizontal scrolling */
    scrollable?: boolean;
    /** Whether to show borders */
    bordered?: boolean;
    /** Size variant of the table */
    size?: 'small' | 'medium' | 'large';
    /** Whether to enable column reordering */
    reorderable?: boolean;
    /** Whether to enable row expansion */
    expandable?: boolean;
    /** Function to render expanded row content */
    expandedRowRender?: (row: T) => ReactNode;
    /** Currently expanded row keys */
    expandedRows?: (string | number)[];
    /** Callback when expansion changes */
    onExpandChange?: (expandedKeys: (string | number)[]) => void;
}
