import React, { useState, useEffect, useMemo } from 'react';
import { TableProps, TableColumn, SortDirection } from './types';
import { Button } from '../Button';
import { Spinner } from '../Spinner';
import { BaseCheckbox } from '../base/BaseCheckbox';
import { Tooltip } from '../Tooltip';
import './Table.css';

/**
 * A flexible table component with support for sorting, pagination, and selection
 */
export const Table = <T extends object>({
    data,
    columns,
    getRowKey = (row: any) => row.id,
    pagination = false,
    pageSize = 10,
    currentPage = 1,
    onPageChange,
    sortable = false,
    initialSortColumn,
    initialSortDirection = null,
    onSortChange,
    selectable = false,
    selectionStyle = 'checkbox',
    selectedRows = [],
    onSelectionChange,
    loading = false,
    emptyText = 'No data available',
    className = '',
    style,
    striped = false,
    hoverable = true,
    stickyHeader = false,
    height,
    scrollable = false,
    bordered = false,
    size = 'medium',
}: TableProps<T>) => {
    // Sorting state
    const [sortColumn, setSortColumn] = useState<string | undefined>(initialSortColumn);
    const [sortDirection, setSortDirection] = useState<SortDirection>(initialSortDirection);

    // Selection state
    const [selected, setSelected] = useState<Set<string | number>>(new Set(selectedRows));

    // Update selection when prop changes
    useEffect(() => {
        setSelected(new Set(selectedRows));
    }, [selectedRows]);

    // Sort data
    const sortedData = useMemo(() => {
        if (!sortColumn || !sortDirection) return data;

        const column = columns.find(col => col.id === sortColumn);
        if (!column) return data;

        return [...data].sort((a, b) => {
            const aValue = column.accessor(a);
            const bValue = column.accessor(b);

            if (aValue === bValue) return 0;
            if (aValue == null) return 1;
            if (bValue == null) return -1;

            const result = aValue < bValue ? -1 : 1;
            return sortDirection === 'asc' ? result : -result;
        });
    }, [data, sortColumn, sortDirection, columns]);

    // Pagination
    const totalPages = Math.ceil(sortedData.length / pageSize);
    const paginatedData = pagination
        ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        : sortedData;

    // Handle sort
    const handleSort = (columnId: string) => {
        if (!sortable) return;

        const newDirection: SortDirection =
            sortColumn === columnId
                ? sortDirection === 'asc'
                    ? 'desc'
                    : sortDirection === 'desc'
                        ? null
                        : 'asc'
                : 'asc';

        setSortColumn(newDirection ? columnId : undefined);
        setSortDirection(newDirection);
        onSortChange?.(columnId, newDirection);
    };

    // Handle selection
    const handleSelect = (key: string | number) => {
        const newSelected = new Set(selected);
        if (newSelected.has(key)) {
            newSelected.delete(key);
        } else {
            newSelected.add(key);
        }
        setSelected(newSelected);
        onSelectionChange?.(Array.from(newSelected));
    };

    const handleSelectAll = () => {
        const newSelected = new Set<string | number>();
        if (selected.size < paginatedData.length) {
            paginatedData.forEach(row => newSelected.add(getRowKey(row)));
        }
        setSelected(newSelected);
        onSelectionChange?.(Array.from(newSelected));
    };

    // Table classes
    const tableClasses = [
        'table',
        `table--${size}`,
        striped && 'table--striped',
        hoverable && 'table--hoverable',
        stickyHeader && 'table--sticky-header',
        scrollable && 'table--scrollable',
        bordered && 'table--bordered',
        loading && 'table--loading',
        className
    ].filter(Boolean).join(' ');

    // Row classes
    const getRowClasses = (rowKey: string | number) => [
        'table__row',
        selected.has(rowKey) && 'table__row--selected',
        selectable && selectionStyle === 'highlight' && 'table__row--highlight'
    ].filter(Boolean).join(' ');

    return (
        <div
            className="table-container"
            style={{
                ...style,
                height: height ? `${height}px` : undefined,
                overflow: height ? 'auto' : undefined
            }}
        >
            <table className={tableClasses}>
                <thead>
                    <tr>
                        {selectable && selectionStyle === 'checkbox' && (
                            <th className="table__select-cell">
                                <BaseCheckbox
                                    checked={selected.size === paginatedData.length && paginatedData.length > 0}
                                    indeterminate={selected.size > 0 && selected.size < paginatedData.length}
                                    onChange={handleSelectAll}
                                    size={size}
                                />
                            </th>
                        )}
                        {columns.map(column => {
                            const headerContent = (
                                <div className="table__header-content">
                                    {column.header}
                                    {sortable && column.sortable !== false && sortColumn === column.id && (
                                        <span className={`table__sort-icon table__sort-icon--${sortDirection}`} />
                                    )}
                                </div>
                            );

                            return (
                                <th
                                    key={column.id}
                                    className={[
                                        'table__header',
                                        column.align && `table__header--${column.align}`,
                                        sortable && column.sortable !== false && 'table__header--sortable'
                                    ].filter(Boolean).join(' ')}
                                    style={{
                                        minWidth: column.minWidth,
                                        maxWidth: column.maxWidth,
                                        width: column.width
                                    }}
                                    onClick={() => sortable && column.sortable !== false && handleSort(column.id)}
                                >
                                    {column.tooltip ? (
                                        <Tooltip content={column.tooltip}>
                                            {headerContent}
                                        </Tooltip>
                                    ) : headerContent}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td
                                colSpan={columns.length + (selectable && selectionStyle === 'checkbox' ? 1 : 0)}
                                className="table__loading-cell"
                            >
                                <Spinner size={24} />
                            </td>
                        </tr>
                    ) : paginatedData.length === 0 ? (
                        <tr>
                            <td
                                colSpan={columns.length + (selectable && selectionStyle === 'checkbox' ? 1 : 0)}
                                className="table__empty-cell"
                            >
                                {emptyText}
                            </td>
                        </tr>
                    ) : (
                        paginatedData.map(row => {
                            const rowKey = getRowKey(row);
                            const handleRowClick = () => {
                                if (selectable && selectionStyle === 'highlight') {
                                    handleSelect(rowKey);
                                }
                            };

                            return (
                                <tr
                                    key={rowKey}
                                    className={getRowClasses(rowKey)}
                                    onClick={handleRowClick}
                                >
                                    {selectable && selectionStyle === 'checkbox' && (
                                        <td className="table__select-cell">
                                            <BaseCheckbox
                                                checked={selected.has(rowKey)}
                                                onChange={() => handleSelect(rowKey)}
                                                size={size}
                                            />
                                        </td>
                                    )}
                                    {columns.map(column => {
                                        const value = column.accessor(row);
                                        const cellContent = column.Cell ? (
                                            <column.Cell value={value} row={row} />
                                        ) : value;

                                        return (
                                            <td
                                                key={column.id}
                                                className={[
                                                    'table__cell',
                                                    column.align && `table__cell--${column.align}`,
                                                    column.wrap && 'table__cell--wrap'
                                                ].filter(Boolean).join(' ')}
                                            >
                                                {column.cellTooltip ? (
                                                    <Tooltip content={column.cellTooltip(value, row)}>
                                                        {cellContent}
                                                    </Tooltip>
                                                ) : cellContent}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>

            {pagination && totalPages > 1 && (
                <div className="table__pagination">
                    <Button
                        variant="outline"
                        size="small"
                        disabled={currentPage === 1}
                        onClick={() => onPageChange?.(currentPage - 1)}
                    >
                        Previous
                    </Button>
                    <span className="table__pagination-info">
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button
                        variant="outline"
                        size="small"
                        disabled={currentPage === totalPages}
                        onClick={() => onPageChange?.(currentPage + 1)}
                    >
                        Next
                    </Button>
                </div>
            )}
        </div>
    );
};
