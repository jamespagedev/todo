import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  to: string;
  styles?: CSSProperties;
}

export default function GrayCancelBtn({ title, to, styles = {} }: Props): JSX.Element {
  return (
    <Link className="link-btn gray-cancel-btn" style={styles} to={to}>
      {title}
    </Link>
  );
}
