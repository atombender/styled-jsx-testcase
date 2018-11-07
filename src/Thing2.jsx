import React from 'react';

import Thing from './Thing';

export default class Thing2 extends React.Component {
  render() {
    return (
      <div className="root">
        (Thing2)
        <style jsx>{`
          .root {
            font-size: 2rem;
          }
        `}</style>
      </div>
    );
  }
}
