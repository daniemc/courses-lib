$(function () {

    var coursesObj,  coursesList;
    getCourses();
    
    function getCourses(name = '') {        
        fetch('/courses')        
            .then(resp => {
                return resp.json()
            })
            .then(jsonResp => {
                console.log(jsonResp)
                coursesObj = jsonResp
                coursesList = jsonResp.items
            })
    }
})