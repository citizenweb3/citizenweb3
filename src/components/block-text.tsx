import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface OwnProps {
  text: string | ReactNode;
  className?: string;
  textCenter?: boolean;
}

const BlockText: FC<OwnProps> = ({ text, className, textCenter = false }) => {
  return (
    <div
      className={twMerge(
        'text-xl whitespace-pre-wrap font-light leading-relaxed',
        textCenter && 'text-center',
        className,
      )}
    >
      {text}
    </div>
  );
};

export default BlockText;
