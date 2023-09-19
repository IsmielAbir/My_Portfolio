document.addEventListener("DOMContentLoaded", function() {
    var nameElement = document.getElementById("name");
    var names = ["I", "Is", "Ism", "Ismi", "Ismie", "Ismiel", "Ismiel ", "Ismiel A", "Ismiel Ab", "Ismiel Abi", "Ismiel Abir"];
    var currentIndex = 0;

    function updateName() {
        nameElement.textContent = names[currentIndex];
        currentIndex = (currentIndex + 1) % names.length;
        setTimeout(updateName, 200); 
    }

    updateName();
});


document.addEventListener("DOMContentLoaded", function(){

    var name = document.getElementById('experience');
    var n = ['PYTHON', 'JAVA', 'MYSQL', 'HTML5', 'CSS3', 'JAVASCRIPT', 'API', 'DJANGO', 'PHP', 'C#', 'C', 'C++', 'LARAVEL', 'REACTJS', 'MACHINE LEARNING', 'NETWORKING', 'OPERATING SYSTEM', 'SOFTWARE DEVELOPMENT', 'PROBLEM SOLVING'];
    var c = 0;

    function update(){
        name.textContent = n[c];
        c = (c+1)% n.length;
        setTimeout(update, 800)
    }

    update()

});