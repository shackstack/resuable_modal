import { MouseEvent, ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
  style?: string;
}

const Content = ({ style, children }: ContentProps) => {
  const stopBubble = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={style} onClick={stopBubble}>
      {children}
    </div>
  );
};

export default Content;
