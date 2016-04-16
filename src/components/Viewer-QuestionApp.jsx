import React from 'react';
import Questions from './Viewer-Questions.jsx';

class QuestionApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { questions:
        [{ qID: '',
             questionText: 'Who has the coolest scratch project?',
             choices: [{ cID: '', choiceText: 'Daniel', select: false },
                        { cID: '', choiceText: 'Dave', select: false },
                        { cID: '', choiceText: 'Alex', select: false },
                        { cID: '', choiceText: 'Carlos', select: false },
                      ],
            questionType: 'multipleChoice'
          },
          { qID: '',
              questionText: 'Who is the coolest Codesmith staff member?',
              choices: [{ cID: '', choiceText: 'Victoria', select: false },
                          { cID: '', choiceText: 'Hira', select: false },
                          { cID: '', choiceText: 'Andy', select: false },
                          { cID: '', choiceText: 'DavcID', select: false },
                        ],
              questionType: 'multipleChoice'
          },
          { qID: '',
                questionText: 'Thumbs up or thumbs down on the drinks last Thursday?',
                choices: [ {cID: '', choiceText: 'Thumbs Up', select: false}],
                questionType: 'thumbs'
          }
        ]
      };
  }

  getInitialState() {
    return { question: answer };
  }

  updateQuestion() {

  }


  render() {
    return (
      <div>
        <Questions questionState={this.state.questions} updateQuestion= {this.updateQuestion} />
      </div>
    );
  }
}

export default QuestionApp;
