document$.subscribe(function() {
    // fAddSkillLabelClass()
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


            //alert(a.innerHTML)
            
            // a.addCLass('.md-button .md-button--primary')