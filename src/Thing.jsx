import React from 'react';

export default class Thing extends React.Component {
  render() {
    return (
      <div className="root">
        (Thing)
        <style jsx>{`
          .root {
            font-size: 1rem;
          }
        `}</style>
      </div>
    );
  }
}
