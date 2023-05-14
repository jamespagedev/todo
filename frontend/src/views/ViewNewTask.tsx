import React from 'react';
import { GrayCancelBtn, View } from 'src/components';
import { frontendLinks, headerHeight } from 'src/utils';

//interface Props {}

export default function ViewNewTask(): JSX.Element {
  return (
    <View>
      <>
        <header>
          <h2>MY TO DO LIST</h2>
          <GrayCancelBtn to={frontendLinks.tasks} title="Cancel/Back" />
        </header>
        <div style={{ height: `${headerHeight}px` }} />
        <div className="view-container">
          <h1>New Task</h1>
        </div>
      </>
    </View>
  );
}
