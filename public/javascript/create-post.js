async function createPostHandler(event) {
    event.preventDefault();

    document.location.replace('/home/new')
}


document.querySelector('#create-new-post').addEventListener('click', createPostHandler);