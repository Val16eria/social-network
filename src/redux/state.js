let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are u?', likesCount: 12}, 
            {id: 2, message: 'It\'s my first post', likesCount: 20},
            {id: 3, message: 'Hi', likesCount: 3}, 
            {id: 4, message: 'What are u doung?', likesCount: 2}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Дмитрий'}, 
            {id: 2, name: 'Оксана'}, 
            {id: 3, name: 'Саша'}, 
            {id: 4, name: 'Валерия'}, 
            {id: 5, name: 'Костя'}, 
            {id: 6, name: 'Женя'}
        ],
        messages: [
            {id: 1, message: 'Hi'}, 
            {id: 2, message: 'How are u?'}, 
            {id: 3, message: 'Yo'}, 
        ]
    }
}

export default state;