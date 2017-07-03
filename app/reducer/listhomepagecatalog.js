/**
 * Created by thuannd on 03/07/2017.
 */

const redux = require('redux');
//state = default state
const _default =[
    {
        id : 1,
        title: "Truyện mới nhất >",
        stories: ["1", "2", "3", "4", "5", "6"]
    },
    {
        id : 2,
        title: "Truyện trinh thám >",
        stories: ["1", "2", "3", "4", "5", "6"]
    },
    {
        id : 3,
        title: "Truyện lãng mạn >",
        stories: ["1", "2", "3", "4", "5", "6", "7"]
    }
]

let list = (state = _default,action) => {
    switch (action.type) {
        case 'ADD':
            return [...state,action.item]
        case 'DEL':
            return state.filter((e,i) => i != action.index)
        default:
            return state;
    }
}

export default list
