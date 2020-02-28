import api from './api'

api.get('/posts')
  .then(function(response) {
    
    let posts = response.data

    api.get('/comments') 
        .then(function(response) {
            
            let divPosts = document.getElementById('posts')

            posts.forEach(element => {

                const filtro = response.data.filter(function(item) {
                    return item.postId == element.id
                })

                let newPost = document.createElement('div')
                newPost.setAttribute('id', 'newPost')
                newPost.appendChild(document.createTextNode(element.title))
            
                let commentsGroup = document.createElement('div')
                commentsGroup.setAttribute('id', 'commentsGroup')

                filtro.forEach(function(item) {

                    let newComment = document.createElement('li')
                    newComment.setAttribute('id', 'newComment')
                    newComment.appendChild(document.createTextNode(item.name))
                    commentsGroup.appendChild(newComment)

                })
                newPost.appendChild(commentsGroup)
                divPosts.appendChild(newPost)
            })
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })

    //console.log(response);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .then(function() {
    // always executed
  });

