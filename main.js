const btnDepartment = document.getElementById('btn-department'),
    grid = document.getElementById('grid'),
    containerLinksNav = document.querySelector('#menu .container-links-nav'),
    btnCloseMenu = document.getElementById('btn-menu-close'),
    containerSubcategories = document.querySelector('#grid .container-subcategories'),
    movilDevice = () => window.innerWidth <= 800;

btnDepartment.addEventListener('mouseover', () => {
    movilDevice();
    if (!movilDevice()) {
        grid.classList.add('activo');
    }
});

grid.addEventListener('mouseleave', () => {
    if (!movilDevice()) {
        grid.classList.remove('activo');
    }
});

document.querySelectorAll('#menu .categories a').forEach((element) => {
    element.addEventListener('mouseenter', (e) => {
        if (!movilDevice()) {
            // console.log(e.target.dataset.category);
            document.querySelectorAll('#menu .subcategory').forEach((category) => {
            //console.log(category.dataset.category);
            category.classList.remove('activo');
            if (category.dataset.category == e.target.dataset.category) {
                category.classList.add('activo');
            }
            });
        }

    });
});

// listener for mobile 

document.querySelector('#btn-menu-bars').addEventListener('click', (e) => {
    e.preventDefault();
    if(containerLinksNav.classList.contains('activo')) {
        containerLinksNav.classList.remove('activo');
        document.querySelector('body').style.overflow='visible';
    } else {
        containerLinksNav.classList.add('activo');
        document.querySelector('body').style.overflow='hidden';
    }
});

// click all department

btnDepartment.addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.add('activo');
    btnCloseMenu.classList.add('activo');
});

// btn return categories

document.querySelector('#grid .categories .btn-return').addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.remove('activo');
    btnCloseMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categories a').forEach((element) => {
    element.addEventListener('click', (e) => {
        if(movilDevice()) {
            containerSubcategories.classList.add('activo');
            document.querySelectorAll('#menu .subcategory').forEach((category) => {
                category.classList.remove('activo');
                if(category.dataset.category == e.target.dataset.category) {
                    category.classList.add('activo');
                }
            });
        } 
    });
});

document.querySelectorAll('#grid .container-subcategories .btn-return').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        containerSubcategories.classList.remove('activo');
    })
});

btnCloseMenu.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((element) => {
        element.classList.remove('activo');
    });
    document.querySelector('body').style.overflow = 'visible';

});
