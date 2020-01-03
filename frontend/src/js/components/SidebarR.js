import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WidgetSearch } from './Widgets';

export default class SidebarRight extends Component {
  render () {


    return (
      <div className="hidden xxl:block bg-blue-100 w-full sidebar">
      <div className="flex flex-col w-full">
        <div className="ml-12 mb-10">

            <WidgetSearch />
          <div className="flex flex-col mt-10">

            <RedirectTo url="/flashcards" pageComp="flashcard mode" />
            <RedirectTo url="/settings" pageComp="account settings" />

          </div>

        </div>
      </div>

    </div>
  );
}
};

export const RedirectTo = (props) => {
  return(
    <Link to={props.url} className="h-10 ml-12 my-1 hover:opacity-50 w-40">{props.pageComp}
      <div className="w-10 border-b border-blue-800 absolute w-32"></div>
    </Link>
  )
}
