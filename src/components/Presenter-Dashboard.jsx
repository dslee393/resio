import React from 'react';
import Graphs from './Presenter-Graphs.jsx';
const socket = io();

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    const self = this;
    let answerIncrease;
    let answerSame;
    this.state = {
        'Carlos.MyPoll.0.0': [0, false], 
        'Carlos.MyPoll.0.1': [0, false],
        'Carlos.MyPoll.0.2': [0, false],
        'Carlos.MyPoll.0.3': [0, false],
        'Carlos.MyPoll.1.0': [0, false],
        'Carlos.MyPoll.1.1': [0, false],
        'Carlos.MyPoll.1.2': [0, false],
        'Carlos.MyPoll.1.3': [0, false]

       // Questions:
       //   [
       //      {
       //      questionText: 'Who has the coolest scratch project?',
       //      choices: ["Alex", "Danny", "Dave", "Carlos"],
       //      answers: [0, 0, 0, 0]
       //      },
       //      {
       //      questionText: 'Who has the coolest scratch project?',
       //      choices: ["Alex", "Danny", "Dave", "Carlos"],
       //      answers: [0, 0, 0, 0]
       //      }
       //    ]
   };
        // Questions: [
        //   {'Carlos.MyPoll.0.0': 0,
        //   'Carlos.MyPoll.0.1': 0,
        //   'Carlos.MyPoll.0.2': 0,
        //   'Carlos.MyPoll.0.3': 0},

        //   {'Carlos.MyPoll.1.0': 0,
        //   'Carlos.MyPoll.1.1': 0,
        //   'Carlos.MyPoll.1.2': 0,
        //   'Carlos.MyPoll.1.3': 0}
        // ]

        //questions:
        // [ { qID: 0,
        //      questionText: 'Who has the coolest scratch project?',
        //      choices: [  {answered: '', choiceText: 'Daniel', selected: false},
        //                  {answered: '', choiceText: 'Dave', selected: false},
        //                  {answered: '', choiceText: 'Alex', selected: false},
        //                  {answered: '', choiceText: 'Carlos', selected: false}
        //                ],
        //     },
        //   { qID: 1,
        //       questionText: 'Who is the coolest Codesmith staff member?',
        //       choices: [ {answered: '', choiceText: 'Victoria', selected: false},
        //                  {answered: '', choiceText: 'Hira', selected: false},
        //                  {answered: '', choiceText: 'Andy', selected: false},
        //                  {answered: '', choiceText: 'DavcID', selected: false}
        //                  ],
        //     }
        // ],
      socket.on('serverResponse', function(data) {
        if(self.state[data][1] === false){
          answerIncrease = { data: [ self.state[data][0]++, self.state[data][1]++] };
          for(var response in self.state){
            if(response === data){
              self.setState(answerIncrease);
            } else if(response[14] === data[14]){
              answerSame = { response: [ self.state[response][0], self.state[response][1]++ ] };
              self.setState(answerSame);
            }
          }
        } 
      });
    };

  render() {
    return (
      <div>
      <h5>Showing Responses</h5>
      <Graphs viewerResponse={this.state} />
      </div>
    );
  }
}

export default Dashboard;
