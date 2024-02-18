// -----------------2-homepage script--------------------------

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector("#quotesCarousel .loader");
  const loader1 = document.querySelector("#popularTutorials .loader");
  const quotesContainer = document.querySelector("#quotesCarousel .carousel-inner");

  // Show loaders initially
  loader.style.display = "block";
  loader1.style.display = "block";

  // Fetch quotes from API
  fetch("https://smileschool-api.hbtn.info/quotes")
    .then(response => response.json())
    .then(data => {
      // Hide loader after successful fetching
      loader.style.display = "none";
      // Parse quotes data
      const quotes = data.map((quote, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <div class="row mx-auto align-items-center">
            <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
              <img src="${quote.pic_url}" class="d-block align-self-center" alt="Carousel Pic 1" />
            </div>
            <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
              <div class="quote-text">
                <p class="text-white">${quote.text}</p>
                <h4 class="text-white font-weight-bold">${quote.name}</h4>
                <span class="text-white">${quote.title}</span>
              </div>
            </div>
          </div>
        </div>
      `).join('');

      // Update quotes container
      quotesContainer.innerHTML = quotes;
    })
    .catch(error => console.error("Error fetching quotes:", error));

  // Fetch popular tutorials from API
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
    .then(response => response.json())
    .then(data => {

      // Update popular tutorials container
      displayVideos(data);

      // Hide loader after successful fetching and display of popular tutorials
      loader1.style.display = "none";
    })
    .catch(error => {
      console.error("Error fetching popular tutorials:", error);
    });
});

// Function to display videos in the carousel
function displayVideos(videos) {
  const popularTutorialsContainer = document.querySelector(".popular .carousel-inner");
  let html = '';
  for (let i = 0; i < videos.length; i += 4) {
    const videosSlice = videos.slice(i, i + 4);
    html += `<div class="carousel-item ${i === 0 ? 'active' : ''}">`;
    html += '<div class="row">';
    videosSlice.forEach(video => {
      html += getVideoCardHTML(video);
    });
    html += '</div></div>';
  }
  popularTutorialsContainer.innerHTML = html;
}

// Function to get HTML for each video card
function getVideoCardHTML(tutorial) {
  return `
    <div class="col-12 col-sm-6 col-md-6 col-lg-3">
      <div class="card">
        <img src="${tutorial.thumb_url}" class="card-img-top" alt="Video thumbnail" />
        <div class="card-img-overlay text-center">
          <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
        </div>
        <div class="card-body">
          <h5 class="card-title font-weight-bold">${tutorial.title}</h5>
          <p class="card-text text-muted">${tutorial['sub-title']}</p>
          <div class="creator d-flex align-items-center">
            <img src="${tutorial.author_pic_url}" alt="Creator of Video" width="30px" class="rounded-circle" />
            <h6 class="pl-3 m-0 main-color">${tutorial.author}</h6>
          </div>
          <div class="info pt-3 d-flex justify-content-between">
            <div class="rating">
              ${'<img src="./images/star_on.png" alt="Star" />'.repeat(tutorial.star)}
              ${'<img src="./images/star_off.png" alt="empty Star" />'.repeat(5 - tutorial.star)}
            </div>
            <span class="main-color">${tutorial.duration}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// -------------------------homepage script------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector("#quotesHomepage .loader");
  const loader1 = document.querySelector("#popularTutoHomepage .loader");
  const loader2 = document.querySelector("#latestVideosCarousel .loader");
  const quotesContainer = document.querySelector("#quotesHomepage .carousel-inner");

  // Show loaders initially
  loader.style.display = "block";
  loader1.style.display = "block";

  // Fetch quotes from API
  fetch("https://smileschool-api.hbtn.info/quotes")
    .then(response => response.json())
    .then(data => {
      // Hide loader after successful fetching
      loader.style.display = "none";
      // Parse quotes data
      const quotes = data.map((quote, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
          <div class="row mx-auto align-items-center">
            <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
              <img src="${quote.pic_url}" class="d-block align-self-center" alt="Carousel Pic 1" />
            </div>
            <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
              <div class="quote-text">
                <p class="text-white">${quote.text}</p>
                <h4 class="text-white font-weight-bold">${quote.name}</h4>
                <span class="text-white">${quote.title}</span>
              </div>
            </div>
          </div>
        </div>
      `).join('');

      // Update quotes container
      quotesContainer.innerHTML = quotes;
    })
    .catch(error => console.error("Error fetching quotes:", error));

  // Fetch popular tutorials from API
  fetch("https://smileschool-api.hbtn.info/popular-tutorials")
    .then(response => response.json())
    .then(data => {

      // Update popular tutorials container
      displayVideos(data);

      // Hide loader after successful fetching and display of popular tutorials
      loader1.style.display = "none";
    })
    .catch(error => {
      console.error("Error fetching popular tutorials:", error);
    });

  // Fetch latest videos from API
  fetch("https://smileschool-api.hbtn.info/latest-videos")
    .then(response => response.json())
    .then(data => {

      // Show loader before fetching latest videos
      loader2.style.display = "block";

      // Populate carousel with latest videos
      displayLatestVideos(data);

      // Hide loader after successful fetching and display of latest videos
      loader2.style.display = "none";
    })
    .catch(error => console.error("Error fetching latest videos:", error));
});

// Function to display videos in the carousel
function displayVideos(videos) {
  const popularTutorialsContainer = document.querySelector("#popularTutoHomepage .carousel-inner");
  let html = '';
  for (let i = 0; i < videos.length; i += 4) {
    const videosSlice = videos.slice(i, i + 4);
    html += `<div class="carousel-item ${i === 0 ? 'active' : ''}">`;
    html += '<div class="row">';
    videosSlice.forEach(video => {
      html += getVideoCardHTML(video);
    });
    html += '</div></div>';
  }
  popularTutorialsContainer.innerHTML = html;
}

// Function to display latest videos in the carousel
function displayLatestVideos(videos) {
  const carouselInner = document.querySelector("#latestVideosCarousel .carousel-inner");
  let html = '';
  for (let i = 0; i < videos.length; i += 4) {
    const videosSlice = videos.slice(i, i + 4);
    html += `<div class="carousel-item ${i === 0 ? 'active' : ''}">`;
    html += '<div class="row">';
    videosSlice.forEach(video => {
      html += getVideoCardHTML(video);
    });
    html += '</div></div>';
  }
  carouselInner.innerHTML = html;
}

// Function to get HTML for each video card
function getVideoCardHTML(tutorial) {
  return `
    <div class="col-12 col-sm-6 col-md-6 col-lg-3">
      <div class="card">
        <img src="${tutorial.thumb_url}" class="card-img-top" alt="Video thumbnail" />
        <div class="card-img-overlay text-center">
          <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
        </div>
        <div class="card-body">
          <h5 class="card-title font-weight-bold">${tutorial.title}</h5>
          <p class="card-text text-muted">${tutorial['sub-title']}</p>
          <div class="creator d-flex align-items-center">
            <img src="${tutorial.author_pic_url}" alt="Creator of Video" width="30px" class="rounded-circle" />
            <h6 class="pl-3 m-0 main-color">${tutorial.author}</h6>
          </div>
          <div class="info pt-3 d-flex justify-content-between">
            <div class="rating">
              ${'<img src="./images/star_on.png" alt="Star" />'.repeat(tutorial.star)}
              ${'<img src="./images/star_off.png" alt="empty Star" />'.repeat(5 - tutorial.star)}
            </div>
            <span class="main-color">${tutorial.duration}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ---------------------------pricing script-------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const loaderPricing = document.querySelector("#quotesPricing .loader");
  const quotesPricing = document.querySelector("#quotesPricing .carousel-inner");

  loaderPricing.style.display = "block";

  // Fetch quotes from API
  fetch("https://smileschool-api.hbtn.info/quotes")
  .then(response => response.json())
  .then(data => {
    // Hide loader after successful fetching
    loaderPricing.style.display = "none";
    // Parse quotes data
    const quotes = data.map((quote, index) => `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <div class="row mx-auto align-items-center">
          <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
            <img src="${quote.pic_url}" class="d-block align-self-center" alt="Carousel Pic 1" />
          </div>
          <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
            <div class="quote-text">
              <p class="text-white">${quote.text}</p>
              <h4 class="text-white font-weight-bold">${quote.name}</h4>
              <span class="text-white">${quote.title}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Update quotes container
    quotesPricing.innerHTML = quotes;
  })
  .catch(error => console.error("Error fetching quotes:", error));
});

// ---------------------------courses script-------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const searchTextArea = document.querySelector(".search-text-area");
  const topicDropdown = document.querySelector(".topic-dropdown");
  const sortByDropdown = document.querySelector(".sort-by-dropdown");
  const resultsContainer = document.querySelector(".results .row");
  const loaderCourses = document.querySelector(".results .loader");

   // Event listeners for filter elements
   searchTextArea.addEventListener("input", fetchData);
   topicDropdown.addEventListener("change", fetchData);
   sortByDropdown.addEventListener("change", fetchData);


  // Function to fetch data from API
  function fetchData() {
      // Construct API URL with parameters
      const apiUrl = `https://smileschool-api.hbtn.info/courses?q=${searchTextArea.value}&topic=${topicDropdown.value}&sort=${sortByDropdown.value}`;

      console.log("API URL:", apiUrl); // Log the API URL

      // Fetch data from API
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              console.log("API Response:", data); // Log the API response
              if (data && data.courses) { // Check if 'courses' array exists in the response
                  displayVideoCards(data.courses); // Pass 'courses' array to displayVideoCards function
                  updateVideoCount(data.courses.length);
              } else {
                  console.error("Invalid data format. Expected an array of courses.");
              }
              loaderCourses.style.display = "none";
          })
          .catch(error => {
              console.error("Error fetching data:", error);
          });
  }

  // Function to update video count
  function updateVideoCount(count) {
    const videoCountSpan = document.querySelector(".section-title .video-count");
    if (count === 0) {
        videoCountSpan.textContent = "No videos";
        resultsContainer.innerHTML = " ";
    } else {
        videoCountSpan.textContent = count + (count === 1 ? " video" : " videos");
    }
  }


  // Function to display video cards
  function displayVideoCards(data) {
      if (!Array.isArray(data)) {
          console.error("Invalid data format. Expected an array.");
          return;
      }

      if (data.length === 0) {
          console.log("No data to display.");
          return;
      }

      let html = "";
      data.forEach(course => {
          html += `
              <div class="col-12 col-sm-4 col-lg-3 d-flex justify-content-center">
                  <div class="card">
                      <img src="${course.thumb_url}" class="card-img-top" alt="Video thumbnail" />
                      <div class="card-img-overlay text-center">
                          <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                      </div>
                      <div class="card-body">
                          <h5 class="card-title font-weight-bold">${course.title}</h5>
                          <p class="card-text text-muted">${course['sub-title']}</p>
                          <div class="creator d-flex align-items-center">
                              <img src="${course.author_pic_url}" alt="Creator of Video" width="30px" class="rounded-circle" />
                              <h6 class="pl-3 m-0 main-color">${course.author}</h6>
                          </div>
                          <div class="info pt-3 d-flex justify-content-between">
                              <div class="rating">
                                  ${'<img src="./images/star_on.png" alt="Star" />'.repeat(course.star)}
                                  ${'<img src="./images/star_off.png" alt="empty Star" />'.repeat(5 - course.star)}
                              </div>
                              <span class="main-color">${course.duration}</span>
                          </div>
                      </div>
                  </div>
              </div>
          `;
      });

      // Update results container
      resultsContainer.innerHTML = html;
  }

  // Fetch data initially
  fetchData();
});
