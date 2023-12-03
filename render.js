const Renderer = function (){
    const renderPosts = function (_posts) {
        const postsContainer = $('#posts');
        postsContainer.empty();

        for (let i = 0; i < _posts.length; i++) {
            const post = _posts[i];
            const postDiv = $(`<div class="post" data-id="${post.id}"></div>`);
            const postText = $(`<p class="post-text">${post.text}<div class="delete-posts">Delete Posts</div></p>`);
            postDiv.append(postText);
                const commentsList = $('<ul class="comments-list"></ul>');
                for (let j = 0; j < post.comments.length; j++) {
                    const comment = post.comments[j];
                    const commentItem = $(`<li class="comment" data-id="${comment.id}">${comment.text}<div class="delete-comment">X</div></li>`);
                    commentsList.append(commentItem);
                }
                const textComent = $("<input type='text' placeholder = 'add your comment' class ='writeComment'>")
                const addComent  = $("<button class='add'>add</button>")
                commentsList.append(textComent)
                commentsList.append(addComent)
                postDiv.append(commentsList);
            

            postsContainer.append(postDiv);
        }
    }
    return {renderPosts}
}  
    


    

