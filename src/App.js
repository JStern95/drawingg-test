import React from 'react';
import {SketchField, Tools} from 'react-sketch';

class SketchFieldDemo extends React.Component {

  // state={
  //   width='1024px',
  //   height='200px',
  //   tool={Tools.Pencil},
  //   lineColor='pink',
  //   lineWidth={3}
  // }

     render() {
        return (
          <div onMouseUp={()=>console.log("You stopped drawing")}>
            <SketchField width='50%'
                                 height='50%'
                                 tool={Tools.Pencil}
                                 lineColor='red'
                                 lineWidth={3}/>
            </div>
        )
     }
}

export default SketchFieldDemo;
