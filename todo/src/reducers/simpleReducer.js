export const Todo = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about switch',
    completed: false,
    id: 3892987590
  },
  {
    item: 'Learn about action',
    completed: true,
    id: 3892987591
  }
]



const reducer = (state, action) => {
    switch(action.type){
        default: return state;
    }
};

export default reducer;
