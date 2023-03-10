let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are u?', likesCount: 12}, 
                {id: 2, message: 'It\'s my first post', likesCount: 20},
                {id: 3, message: 'Hi', likesCount: 3}, 
                {id: 4, message: 'What are u doung?', likesCount: 2}
            ],
            newPostText: "it-kamasutra"
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
    },
    _callSubscriber() {
        console.log("state");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;

window.store = store;
// store - OOP