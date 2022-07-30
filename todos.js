let todele = document.getElementById('taskinfo');
let tasklist = document.getElementById('tasklist');

document.getElementById('btn').onclick = function () {
    if (todele.value.length == 0) {
        alert("Empty task !!");

    }
    else {
        tasklist.innerHTML = tasklist.innerHTML +`
        <div class="task">
            <span id="work">${todele.value}</span>
            <button class="del"><i class="fa fa-trash-o fa_custom fa-2x"></i></button>
        </div>
        `;
        console.log(tasklist.innerHTML);
        let alltasks = document.querySelectorAll('.del')

        for (i = 0; i < alltasks.length; i++) 
        {
            alltasks[i].onclick = function () 
            {
                this.parentNode.remove();
            }
        }
        todele.value = "";

    }
}