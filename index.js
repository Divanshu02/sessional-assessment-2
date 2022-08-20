    const xhr = new XMLHttpRequest();
    const url = `https://click.mlsend2.com/link/c/YT0yMDEzMTc4NDUzNTYxNDQ3NDMyJmM9ZjRpMyZlPTg5NzU1NyZiPTEwMDMyMTM0NTkmZD1iOXk0bDZo.oMFSuWLn0XNQZux7fWgu5ZxKnqtTIRkzNy-75A8MY74`

    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)

            let template = ''
            for(let i=0; i < 10; i++) {
                template += `
                    <div class="data" style="width: 50%;height : 50%; margin: 1.2em;">
                        user id : ${response[i].userId}
                        id :  ${response[i].id}
                        title :  ${response[i].title}
                        body : id :  ${response[i].body}
                    </div>
                `
            }

            document.querySelector('#my-container').innerHTML = template
        }
    }

    xhr.send()
