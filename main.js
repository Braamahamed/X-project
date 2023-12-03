const x = Xmodule()
const renderer = Renderer()



    const post = function() {
        let addContent = $('#input').val().trim();
        if (addContent === '') {
            alert('You have to write something!');
            return; 
        }
        x.addPost(addContent); 
        $('#input').val('');
        newRenderer()
    };
    
    const newRenderer = function (){
        renderer.renderPosts(x.getPosts())

    $('.delete-posts').on('click', function() {
        let postId = $(this).closest('.post').data('id');
        x.removePost(postId);
        newRenderer()
    });
    
    $('.add').on('click', function() {
        const postId = $(this).closest('.post').data('id');
        const commentText = $(this).siblings('.writeComment').val().trim(); 
        if (!commentText) {
            alert('Please write something before adding a comment.');
            return; 
        }
            x.addComment(commentText, postId);
            newRenderer()
        
    });

    $('.delete-comment').on('click', function() {
        const postId = $(this).closest('.post').data('id');
        const commentId = $(this).closest('.comment').data('id');
        x.removeComment(postId,commentId);
        newRenderer()
    });

}

newRenderer()









