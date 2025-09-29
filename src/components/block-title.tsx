import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface OwnProps {
  title: string;
  className?: string;
}

const BlockTitle: FC<OwnProps> = ({ title, className }) => {
  return <h2 className={twMerge('mb-6 text-center text-2xl font-bold', className)}>{title}</h2>;
};

export default BlockTitle;
