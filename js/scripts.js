// Скрипт для index

var btnSearch = document.querySelector(".btn-search-form");
var searchForm = document.querySelector(".search-form");
var dateArrval = searchForm.querySelector("[name='date-arrval']");
var dateDepart = searchForm.querySelector("[name='date-depart']");
var storage = localStorage.getItem("dateArrval");

btnSearch.addEventListener("click", function(event) {
	event.preventDefault();
	searchForm.classList.toggle("form-show");
	if (storage) {
		dateArrval.value = storage;
		dateDepart.focus();
	} else {
		dateArrval.focus();
	};
	searchForm.classList.remove("modal-error");
});
searchForm.addEventListener("submit", function (event) {
     if (!dateArrval.value || !dateDepart.value) {
         event.preventDefault();
         searchForm.classList.remove("modal-error");
         searchForm.offsetWidth = searchForm.offsetWidth;
         searchForm.classList.add("modal-error");
        } else {
          localStorage.setItem("dateArrval", dateArrval.value);
        }
});
