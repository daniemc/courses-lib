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

                renderCourses();
            })
    }

    function renderCourses() {
        const el_list = document.getElementById('courses-list');
        let el;
        let card;
        coursesList.map(course => {
            el = document.createElement('div')
            card = cardLayout(course)
            el.innerHTML = card
            el_list.appendChild(el)
        })
    }

    const cardLayout = ({
        name, imageUrl, maximumCredits, price, description, rating
    }) => `
        <div class="card">
            <div class="card-header">
                <div class="card-header-image">
                    <img src="https://test.mytablemesa.com${imageUrl}">
                </div>
                <div class="card-header-text bolder">
                    <span class="badge">${maximumCredits} Credits</span>
                </div>
            </div>
            <div class="card-body">
                <div class="card-body-title bolder">
                    <span>${name}</span>
                </div>
                <div class="card-body-text">
                    <span>${description}</span>
                </div>
            </div>
            <div class="card-footer">   
                <div class="card-footer-item bolder blue-text">
                 ${ price > 0 ? `$${price}` : 'FREE' }
                </div>
                <div class="card-footer-item">
                    <div class="stars" style="--rating: ${rating};"></div>
                </div>
            </div>
        </div>
    `;
})