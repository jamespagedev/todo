import React from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router-dom';
import { ViewEditTask, ViewNewTask, ViewSortTasks, ViewTasks } from 'src/views';
import { frontendLinks } from 'src/utils';

//interface Props {}

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route path={frontendLinks.tasks} element={<ViewTasks />} />
      <Route path={frontendLinks.sortTasks} element={<ViewSortTasks />} />
      <Route path={frontendLinks.newTask} element={<ViewNewTask />} />
      <Route path={frontendLinks.editTask} element={<ViewEditTask />} />
      <Route path="*" element={<Navigate to={frontendLinks.tasks} replace />} />
    </Switch>
  );
}
