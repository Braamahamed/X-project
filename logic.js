const Xmodule =function(){
    const _posts =[
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = _posts.length + 1
    let comentIdCounter = 7

    const getPosts = function(){
        return _posts
    }

    const addPost = function(text){
        const newPost = {id:'p' + postIdCounter, text:text, comments:[]}

        _posts.push(newPost);
        postIdCounter++;
        return _posts;
    }

    const removePost = function (postId){

        const indexToRemove = _posts.findIndex(_posts => _posts.id === postId);

        if (indexToRemove !== -1) {
            _posts.splice(indexToRemove, 1);
        } 
    }

    const addComment = function(commentText,postId){

        const postIndex = _posts.findIndex(_posts => _posts.id === postId);
        if (postIndex !== -1) {
            const newComment = { id: 'c' + comentIdCounter, text: commentText };
            _posts[postIndex].comments.push(newComment);
            comentIdCounter++;
        }
    }

    const  removeComment = function(postId, commentID){

        const postIndex = _posts.findIndex(_posts => _posts.id === postId);
        if (postIndex !== -1) {
            const commentIndex = _posts[postIndex].comments.findIndex(comment => comment.id === commentID);
            if (commentIndex !== -1) {
            _posts[postIndex].comments.splice(commentIndex, 1);
        }}
    }
    return{
        getPosts,addPost,removePost,addComment,removeComment
    }   
}


