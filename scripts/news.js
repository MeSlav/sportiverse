let newsCOntainer = document.getElementById("news-content");

const news = [
  {
    title: "Giveaway",
    conent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, aut, 
      harum delectus nemo illo quisquam at ea cumque corporis consequuntur repellendus, 
      mollitia enim nisi temporibus iusto in! Deleniti, dolorum quisquam.`
  },
  {
    title: "Competition",
    conent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, aut, 
      harum delectus nemo illo quisquam at ea cumque corporis consequuntur repellendus, 
      mollitia enim nisi temporibus iusto in! Deleniti, dolorum quisquam.`
  },
  {
    title: "New sponsor",
    conent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, aut, 
      harum delectus nemo illo quisquam at ea cumque corporis consequuntur repellendus, 
      mollitia enim nisi temporibus iusto in! Deleniti, dolorum quisquam.`
  },
  {
    title: "Event",
    conent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, aut, 
      harum delectus nemo illo quisquam at ea cumque corporis consequuntur repellendus, 
      mollitia enim nisi temporibus iusto in! Deleniti, dolorum quisquam.`
  },
  {
    title: "Giveaway",
    conent: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, aut, 
      harum delectus nemo illo quisquam at ea cumque corporis consequuntur repellendus, 
      mollitia enim nisi temporibus iusto in! Deleniti, dolorum quisquam.`
  }
]

function createNewsItem(item) {
  //container
  let newsItemContainer = document.createElement("div");
  newsItemContainer.classList = `w-100 d-flex flex-column card my-2 p-3`;
  //title
  let newsItemTitle = document.createElement("div");
  newsItemTitle.classList = `title`;
  newsItemTitle.innerHTML = item.title;
  newsItemContainer.appendChild(newsItemTitle);
  //content
  let newsItemContent = document.createElement("div");
  newsItemContent.innerHTML = item.conent;
  newsItemContainer.appendChild(newsItemContent);
  
  return newsItemContainer;
}

news.forEach(item=>newsCOntainer.appendChild(createNewsItem(item)));