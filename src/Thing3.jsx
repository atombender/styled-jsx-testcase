import React from 'react';

export default class Thing3 extends React.Component {
  render() {
    return (
      <div className="root">
        (Thing 3)
        <style jsx>{`
          .root {
            font-size: 3rem;
          }
        `}</style>
      </div>
    );
  }
}
