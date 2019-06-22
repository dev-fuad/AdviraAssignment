const InitialState = {
  id: 3,
  name: 'Kattie Pearson',
  image: 'https://randomuser.me/api/portraits/women/50.jpg',
};

export default (state = InitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
