enum OpponentCode {
  A = 'A',
  B = 'B',
  C = 'C',
}

enum PlayerCode {
  X = 'X',
  Y = 'Y',
  Z = 'Z',
}

enum Shape {
  Rock,
  Paper,
  Scissors,
}

const SHAPE_SCORE = {
  [Shape.Rock]: 1,
  [Shape.Paper]: 2,
  [Shape.Scissors]: 3,
}

const OPPONENT_HAND = {
  [OpponentCode.A]: Shape.Rock,
  [OpponentCode.B]: Shape.Paper,
  [OpponentCode.C]: Shape.Scissors,
}

const PLAYER_HAND = {
  [PlayerCode.X]: Shape.Rock,
  [PlayerCode.Y]: Shape.Paper,
  [PlayerCode.Z]: Shape.Scissors,
}

enum RoundResult {
  Won,
  Lost,
  Draw,
}

const RESULT_SCORE = {
  [RoundResult.Lost]: 0,
  [RoundResult.Draw]: 3,
  [RoundResult.Won]: 6,
}

const BEAT = {
  [Shape.Paper]: Shape.Rock,
  [Shape.Rock]: Shape.Scissors,
  [Shape.Scissors]: Shape.Paper,
}

const parse = (strategyGuide: string) =>
  strategyGuide
    .trim()
    .split('\n')
    .map((round) => round.split(' ') as [OpponentCode, PlayerCode])

const playRound = (opponentHand: Shape, playerHand: Shape) => {
  if (opponentHand === playerHand) return RoundResult.Draw

  if (BEAT[opponentHand] === playerHand) {
    return RoundResult.Lost
  }

  return RoundResult.Won
}

const score = (opponentHand: Shape, playerHand: Shape) => {
  const result = playRound(opponentHand, playerHand)
  return SHAPE_SCORE[playerHand] + RESULT_SCORE[result]
}

export const countScore = (strategyGuide: string) => {
  return parse(strategyGuide)
    .map(([opponent, player]) =>
      score(OPPONENT_HAND[opponent], PLAYER_HAND[player])
    )
    .reduce((a, b) => a + b)
}

exports.first = countScore

const RESULT = {
  [PlayerCode.X]: RoundResult.Lost,
  [PlayerCode.Y]: RoundResult.Draw,
  [PlayerCode.Z]: RoundResult.Won,
}

const getPlayerShape = (opponentHand: Shape, result: RoundResult) => {
  switch (result) {
    case RoundResult.Won:
      return BEAT[BEAT[opponentHand]]
    case RoundResult.Lost:
      return BEAT[opponentHand]
    case RoundResult.Draw:
    default:
      return opponentHand
  }
}

const score2 = (opponentHand: Shape, result: RoundResult) => {
  const playerHand = getPlayerShape(opponentHand, result)
  return SHAPE_SCORE[playerHand] + RESULT_SCORE[result]
}

export const countScore2 = (strategyGuide: string) => {
  return parse(strategyGuide)
    .map(([opponent, result]) =>
      score2(OPPONENT_HAND[opponent], RESULT[result])
    )
    .reduce((a, b) => a + b)
}

exports.second = countScore2