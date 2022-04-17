

const categoryList = document.querySelector('.menu-navigetion-list');



function getAllJsonData() {
    fetch('data/categories.json')
        .then(response => response.json())
        .then(data => 
            {
                data.forEach(element => {
                    categoryList.innerHTML+=showCategory(element)
                });
            }
            )
        .catch(error => {
            console.log(error)
        })

}

getAllJsonData();


function showCategory(category) {

    return `
    <li class="nav-item menu-active" role="presentation">
        <a class="nav-link" id="first-product" data-toggle="tab" href="#${category.category_name}" role="tab"
            aria-controls="${category.category_name}" aria-selected="false" role="presentation" style='text-transform:capitalize'>${category.category_name}</a>
    </li>
    `
}