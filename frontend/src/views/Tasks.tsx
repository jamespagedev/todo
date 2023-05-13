import React from 'react';
import { GreenLinkBtn, PurpleBtn, View } from 'src/components';
import { headerHeight } from 'src/utils';

//interface Props {}

export default function Tasks(): JSX.Element {
  return (
    <View>
      <>
        <header>
          <h2>MY TO DO LIST</h2>
          <div className="d-inline">
            <PurpleBtn styles={{ marginRight: '20px' }} title="Sort By" onClick={() => console.log('ToDo')} />
            <GreenLinkBtn to="/new-task" title="New Task" />
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
