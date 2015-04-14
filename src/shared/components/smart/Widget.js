'use strict';

import React from 'react';

export default class Widget extends React.Component {
  render() {
    return (
      <div className="Widget-container wrapper-widget-video ng-scope w600">
        <div className="wrapper"><div className="main-content">
          <div id="top-nav">
            <a ng-click="gotoWidgetSearchPage()" className="btn-back u-pullLeft">Back</a>
            <div className="wrapper-input u-pullLeft">
              <label for="search" className="icon icon-search"></label>
              <input type="text" placeholder="Search now" autocomplete="off" name="search"
                className="input-search ng-pristine ng-untouched ng-invalid ng-invalid-required" />
              <div ng-click="resetSearch()" className="Btn--close icon-close"></div>
            </div>
          </div>
          </div>
        </div>
      </div>
     );
  }
}
