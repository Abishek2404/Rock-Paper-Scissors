import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  padding: 40px 25px;
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GameTitle = styled.h1`
  color: #ffffff;
  font-size: 24px;
  line-height: 1.2;
  margin: 0;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  min-width: 100px;
  padding: 10px 20px;
  text-align: center;
`

export const ScoreLabel = styled.p`
  color: #223a5f;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`

export const Score = styled.p`
  color: #223a5f;
  font-family: Roboto, sans-serif;
  font-size: 36px;
  font-weight: bold;
  margin: 5px 0 0;
`

export const ChoicesContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
`

export const ChoiceButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`

export const ChoiceImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
`

export const RulesButton = styled.button`
  align-self: flex-end;
  margin-top: auto;
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  border-radius: 6px;
  padding: 10px 22px;
  font-weight: bold;
  cursor: pointer;
`

export const PopupContainer = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background-color: transparent;
  color: #223a5f;
  font-size: 28px;
  cursor: pointer;
`

export const RulesImage = styled.img`
  width: 500px;
  max-width: 90vw;
`

export const ResultsContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 80px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  flex-wrap: wrap;
`

export const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultLabel = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`

export const ResultImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
`

export const ResultText = styled.p`
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  border-radius: 6px;
  padding: 12px 25px;
  font-weight: bold;
  cursor: pointer;
`
