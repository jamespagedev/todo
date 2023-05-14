import React from 'react';
import { GreenLinkBtn, PurpleLinkBtn, View } from 'src/components';
import { frontendLinks, headerHeight } from 'src/utils';

//interface Props {}

export default function ViewTasks(): JSX.Element {
  return (
    <View>
      <>
        <header>
          <h2>MY TO DO LIST</h2>
          <div className="d-inline">
            <PurpleLinkBtn to={frontendLinks.sortTasks} title="Sort By" styles={{ marginRight: '20px' }} />
            <GreenLinkBtn to={frontendLinks.newTask} title="New Task" />
          </div>
        </header>
        <div style={{ height: `${headerHeight}px` }} />
        <div className="view-container">
          <h1>Tasks</h1>
        </div>
      </>
    </View>
  );
}
