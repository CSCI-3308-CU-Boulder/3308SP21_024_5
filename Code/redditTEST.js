
//Currently loads the top 10 posts from wallstreetbets. Code may have to be changed up once moved to NODE

window.onload =function getreddit(){
    fetch('https://www.reddit.com/r/wallstreetbets/top.json')
    .then((res) => res.json())
    .then((posts) => {
      var i = 0;
      var len = 10;
      for (; i < len; i++) {

      document.getElementById(i).innerHTML = posts["data"].children[i].data.title;
      document.getElementById(i).href = "https://www.reddit.com" + posts["data"].children[i].data.permalink;
      document.getElementById(i).target = "_blank"; //makes it open in new page
          }
    });
  }
