let count = 0;
document.getElementById('add-button').addEventListener('click', function (e) {
    count = count + 1;
    let userInput = document.getElementById('user-input').value;
    const tableContant = document.getElementById('table-contant');
    if (userInput == '') {
        alert('Please enter some text');
    }
    else {
        let makeElement = document.createElement('tr');
        makeElement.id = "main-content"
        makeElement.innerHTML = `<th scope="row">${count}</th>
        <td>${userInput}</td>
        <td>
        <button class="btn btn-success done-button" > Done </button>
        <button  class = "btn btn-danger delete-button"> Delete</button>
        </td>`
        tableContant.appendChild(makeElement);
        document.getElementById('user-input').value = '';
        const allDoneButtons = document.getElementsByClassName("done-button")
        const allDeleteButtons = document.getElementsByClassName("delete-button")
        for (const button of allDeleteButtons) {
            button.addEventListener('click', function (e) {
                // console.log(button)
                e.target.parentNode.parentNode.style.display = "none"
            })
        }
        for (const button of allDoneButtons) {
            button.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.textDecoration = "line-through"
            })
        }
    }
})
document.getElementById("all-gone").addEventListener('click', function () {
    document.getElementById("table-contant").style.display = "none";
    window.location.reload();
})