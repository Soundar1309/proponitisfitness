import React from 'react';

interface SectionHeaderProps {
    title: string;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className = "" }) => {
    return (
        <h2 className={`section__header ${className}`}>
            {title}
        </h2>
    );
};

export default SectionHeader;
