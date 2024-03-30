import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.getElementById(`searchForm`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();

    const searchInputValue = document.getElementById(`searchInput`).value;
    if (searchInputValue.trim() === ``) {
        iziToast.alert({
            title: `Alert`,
            message: `Please enter a value.`,
            position: `topCenter`
        });
        return;
    }

    const apiKey = `43152327-599555690163c4dbf744e6761`;
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchInputValue}&image_type=photo&orientation=horizontal&safesearch=true`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.info({
                    title: `Info`,
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topCenter"
                });
            } else {
                
                displayImages(data.hits);
            }
        })
        .catch(error => {
            iziToast.error({
                title: `Error`,
                message: 'An error occurred while fetching data. Please try again later.',
                position: "topCenter"
            });
        });
});

// Implement the displayImages function to display the images


    



















}