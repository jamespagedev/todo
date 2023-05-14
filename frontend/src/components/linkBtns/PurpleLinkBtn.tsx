import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  to: string;
  styles?: CSSProperties;
}

export default function PurpleLinkBtn({ title, to, styles = {} }: Props): JSX.Element {
  return (
    <Link className="link-btn purple-link-btn" style={styles} to={to}>
      {title}
    </Link>
  );
}
