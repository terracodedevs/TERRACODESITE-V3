import React from 'react';

export type Page = {
    id: string;
    content: React.ReactNode;
};

export interface FlipBookProps {
    pages: Page[];
    onPageChange?: (pageIndex: number) => void;
}

export interface FlipBookState {
    currentPage: number;
}