import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <div className="overflow-x-auto">
      <table ref={ref} className={cn('w-full table-auto min-w-[600px]', className)} {...props} />
    </div>
  )
);
Table.displayName = 'Table';

interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={cn('', className)} {...props} />
  )
);
TableHeader.displayName = 'TableHeader';

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn('', className)} {...props} />
  )
);
TableBody.displayName = 'TableBody';

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={cn('border-b last:border-0', className)} {...props} />
  )
);
TableRow.displayName = 'TableRow';

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn('px-4 py-2 text-xs font-medium', className)} {...props} />
  )
);
TableCell.displayName = 'TableCell';

interface TableHeaderCellProps extends React.HTMLAttributes<HTMLTableCellElement> {}

const TableHeaderCell = React.forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  ({ className, ...props }, ref) => (
    <th ref={ref} className={cn('px-4 py-2 font-semibold text-left text-[hsl(var(--primary))] text-sm', className)} {...props} />
  )
);
TableHeaderCell.displayName = 'TableHeaderCell';

export { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell };
