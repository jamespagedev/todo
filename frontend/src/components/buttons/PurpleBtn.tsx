import React, { CSSProperties } from 'react';

interface Props {
  title: string;
  onClick: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  styles?: CSSProperties;
}

export default function PurpleBtn({ title, onClick, styles = {} }: Props): JSX.Element {
  return (
    <button className="purple-btn" style={styles} onClick={ev => onClick(ev)}>
      {title}
    </button>
  );
}
