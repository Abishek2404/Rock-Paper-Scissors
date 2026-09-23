import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  MainContainer,
  Header,
  GameTitle,
  ScoreContainer,
  ScoreLabel,
  Score,
  ChoicesContainer,
  ChoiceButton,
  ChoiceImage,
  RulesButton,
  PopupContainer,
  CloseButton,
  RulesImage,
  ResultsContainer,
  ResultItem,
  ResultLabel,
  ResultImage,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    score: 0,
    showResults: false,
    yourChoice: null,
    opponentChoice: null,
    result: '',
  }

  getResult = (yourChoice, opponentChoice) => {
    if (yourChoice.id === opponentChoice.id) {
      return 'IT IS DRAW'
    }

    if (
      (yourChoice.id === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
      (yourChoice.id === 'SCISSORS' && opponentChoice.id === 'PAPER') ||
      (yourChoice.id === 'PAPER' && opponentChoice.id === 'ROCK')
    ) {
      return 'YOU WON'
    }

    return 'YOU LOSE'
  }

  onClickChoice = choice => {
    const {choicesList} = this.props

    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomIndex]

    const result = this.getResult(choice, opponentChoice)

    let scoreChange = 0

    if (result === 'YOU WON') {
      scoreChange = 1
    } else if (result === 'YOU LOSE') {
      scoreChange = -1
    }

    this.setState(prevState => ({
      score: prevState.score + scoreChange,
      showResults: true,
      yourChoice: choice,
      opponentChoice,
      result,
    }))
  }

  onPlayAgain = () => {
    this.setState({
      showResults: false,
      yourChoice: null,
      opponentChoice: null,
      result: '',
    })
  }

  renderPlayingView = () => {
    const {choicesList} = this.props

    return (
      <ChoicesContainer>
        {choicesList.map(eachChoice => {
          const testId = {
            ROCK: 'rockButton',
            SCISSORS: 'scissorsButton',
            PAPER: 'paperButton',
          }[eachChoice.id]

          return (
            <li key={eachChoice.id}>
              <ChoiceButton
                type="button"
                data-testid={testId}
                onClick={() => this.onClickChoice(eachChoice)}
              >
                <ChoiceImage src={eachChoice.imageUrl} alt={eachChoice.id} />
              </ChoiceButton>
            </li>
          )
        })}
      </ChoicesContainer>
    )
  }

  renderResultsView = () => {
    const {yourChoice, opponentChoice, result} = this.state

    return (
      <ResultsContainer>
        <ResultItem>
          <ResultLabel>YOU</ResultLabel>
          <ResultImage src={yourChoice.imageUrl} alt="your choice" />
        </ResultItem>

        <ResultItem>
          <ResultLabel>OPPONENT</ResultLabel>
          <ResultImage src={opponentChoice.imageUrl} alt="opponent choice" />
        </ResultItem>

        <ResultText>{result}</ResultText>

        <PlayAgainButton type="button" onClick={this.onPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultsContainer>
    )
  }

  render() {
    const {score, showResults} = this.state

    return (
      <MainContainer>
        <Header>
          <GameTitle>
            ROCK <br />
            PAPER <br />
            SCISSORS
          </GameTitle>

          <ScoreContainer>
            <ScoreLabel>SCORE</ScoreLabel>
            <Score>{score}</Score>
          </ScoreContainer>
        </Header>

        {showResults ? this.renderResultsView() : this.renderPlayingView()}

        <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
          {close => (
            <PopupContainer>
              <CloseButton
                type="button"
                onClick={close}
                data-testid="closeButton"
              >
                <RiCloseLine />
              </CloseButton>

              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default RockPaperScissors
