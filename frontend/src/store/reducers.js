import { START_GAME, INIT, ANSWER } from './types'

const initialState = {
  users: [{ score: 0 }],
  themes: [{ title: 'money', status: [true, true, true, true, true] }],
  game: { status: false, question: '2+2=?', asnwer: '4', title: 'money', price: 400 },
  loading: false,
  isAuth: false
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {

    case START_GAME:
      const startGame = { status: true, ...action.payload };
      const startThemes = state.themes.map((theme) => {
        if (theme.title === action.payload.title) {
          theme.status[Math.round(action.payload.price / 200 - 1)] = false
        }
        return theme;
      });
      return { ...state, game: startGame, themes: startThemes };

    case INIT:
      const initThemes = action.payload.map((el) => {
        return { status: new Array(5).fill(true), title: el.title }
      });
      return { ...state, themes: initThemes };

    case ANSWER:
      const answerUsers = state.users.map((user, i) => {
        if (i === 0) user.score += action.payload;
        return user;
      });
      const answerGame = { ...state.game, status: false }
      return { ...state, users: answerUsers, game: answerGame };

    default:
      return state;
  }
};
