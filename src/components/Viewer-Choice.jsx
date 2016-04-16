import React from 'react';
const socket = io();

class Choice extends React.Component {

  submitAnswer(qIdentifier, choice) {
    var response = JSON.stringify({q: qIdentifier, choice: choice});
    console.log(response);
      socket.emit('viewerAnswer', response);
  }

  render () {
    var question = '';
    if(this.props.qType === 'multipleChoice') {
      return (
        <div id="">
<<<<<<< HEAD
          <button className= "btn btn-default res-btn" 
            onClick={ (event) => if(this.props.qSelected === false)
            {this.submitAnswer(this.props.qIdentifier,this.props.cIdentifier)}}>
            {this.props.qChoice.choiceText}
          </button>
=======
          <button className="btn btn-default res-btn" onClick={(event) => this.submitAnswer(this.props.qIdentifier,this.props.qChoice.choiceText)}>{this.props.qChoice.choiceText}</button>
>>>>>>> efca62e615b3694e36d535f52ee7b480a1119ae3
        </div>
      );
    }
    else {
      return (
        <div id="">
          <div className="row thumb-answers">
            <i className="fa fa-thumbs-up fa-5x" onClick={(event) => this.submitAnswer(this.props.qIdentifier,this.props.cIdentifier)}></i>
            <i className="fa fa-thumbs-down fa-5x" onClick={(event) => this.submitAnswer(this.props.qIdentifier,this.props.cIdentifier)}></i>
          </div>
        </div>
      );
    }
  }
}

export default Choice;
