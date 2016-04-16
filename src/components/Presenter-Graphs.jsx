import React from 'react';
import IndividualGraph from './Presenter-IndividualGraph.jsx';

class Graphs extends React.Component {

  render () {
  var q1 = [
		  {label: 'Votes', values: [
		  {x: 'Daniel', y: this.props.viewerResponse['Carlos.MyPoll.0.0'][0]},
		  {x: 'Dave', y: this.props.viewerResponse['Carlos.MyPoll.0.1'][0]},
		  {x: 'Alex', y: this.props.viewerResponse['Carlos.MyPoll.0.2'][0]},
		  {x: 'Carlos', y: this.props.viewerResponse['Carlos.MyPoll.0.3'][0]}]}
		  ];

	var res1 = this.props.viewerResponse['Carlos.MyPoll.1.0'][0];
	var res2 = this.props.viewerResponse['Carlos.MyPoll.1.1'][0];
	var res3 = this.props.viewerResponse['Carlos.MyPoll.1.2'][0];
	var res4 = this.props.viewerResponse['Carlos.MyPoll.1.3'][0];

	var total = res1 + res2 + res3 + res4;
    var choices = this.props.questions.map((question, i) => {
    	console.log(question.choices);
      return <IndividualGraph key= {i} qType={question.qType} question={question.question} qChoices={question.choices} />
    });

    return (
      <div id="">
      	{choices}
      </div>
    );
  }
}

export default Graphs;
