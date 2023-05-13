import React from 'react';

interface Props {
  children: JSX.Element;
}

export default function View({ children }: Props): JSX.Element {
  return <div className="view">{children}</div>;
}
