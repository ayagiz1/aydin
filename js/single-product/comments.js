
const commentReviewsFunc = function (){
    const commentStarts = document.querySelectorAll(".comment-rating .star");
    commentStarts.forEach((star) =>{
        star.addEventListener("click", (e)=>{
            e.preventDefault();
            commentStarts.forEach((item) => item.classList.remove("active"));
            star.classList.add("active");
        })
    })
}




const addNewCommentFunc = ()=>{

    let comments = [];
    let commentTextDOM = document.getElementById("comment-text");
    let commentNameDOM = document.getElementById("comment-name");
    let commentButtonDOM = document.getElementById("send-comment");
    let commentListDOM = document.querySelector(".comment-list");
    let commenStarsDOM = document.querySelectorAll(".stars .star");
    let CommentText = "";
    let CommentName = "";
    let commentStars = "";



    commenStarsDOM.forEach((star) =>{
        star.addEventListener("click", (e)=>{
            commentStars += e.currentTarget.outerHTML;
        
        })
    })

    commentTextDOM.addEventListener("input", function(e){
        CommentText = e.target.value;
    })

    commentNameDOM.addEventListener("input", function(e){
        CommentName = e.target.value;


    })




    function addcommentFunc(e){
        e.preventDefault();
        comments.push({text: CommentText, name: CommentName, stars:commentStars })
        let results ="";
        comments.forEach((item) =>{
            results += `
            <li class="comment-item">
                            <div class="comment-avatar">
                              <img src="img/avatars/avatar1.jpg" alt="">
                            </div>
                            <div class="comment-text">
                              <ul class="comment-star">
                              ${item.stars}
                              </ul>
                              <div class="comment-meta">
                                <strong>${item.name}</strong>
                                -
                                <time>May 23, 2023</time>
                              </div>
                              <div class="comment-desc">
                                <p>${item.text}.</p>
                              </div>

                            </div>
                          </li>
                        `;
        });

        commentListDOM.innerHTML = results;
        commentTextDOM.value = "";
        commentNameDOM.value = "";

    }
    commentButtonDOM.addEventListener("click", addcommentFunc)
}

function commentFunc(){
    commentReviewsFunc();
    addNewCommentFunc();
}


export default commentFunc();