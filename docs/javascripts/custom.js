document$.subscribe(function() {
    // fAddSkillLabelClass()
    //fRemoveHeader1()
})

function fAddSkillLabelClass(){
    const skillDiv = document.querySelectorAll('.skillset');
    skillDiv.forEach(scopeButton)

    function scopeButton(item){
        const buttonLabel = item.children
        buttonLabel.forEach(alert('aaa'))
    }
    function addButtonClass(a){
        alert(a.innerHTML)
    }


}

function fRemoveHeader1(){
    var header1 = document.querySelectorAll('h1');
    header1.remove()
}