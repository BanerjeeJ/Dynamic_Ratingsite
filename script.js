function next() {
  var rate = document.querySelector('input[name="answer"]:checked').value;
  var second = document.querySelector('input[name="answer"]:checked').value;
  var third = document.querySelector('input[name="answer"]:checked').value;
  var fourth = document.querySelector('input[name="answer"]:checked').value;
  console.log(rate);
  let ratings = {
    rate: rate,
    rate1: second,
    rate2: third,
    rate3: fourth,
  };
  console.log(ratings);
  localStorage.setItem("ratings_data", JSON.stringify(ratings));

  let first_ratings = {
    rate: rate,
    rate1: second,
    rate2: third,
    rate3: fourth,
  };
  console.log(first_ratings);
  localStorage.setItem("ratings_data", JSON.stringify(first_ratings));
}

function next1() {
  var second = document.querySelector('input[name="answer"]:checked').value;
  console.log(second);
  let ratings = {
    second: rate,
  };
  console.log(ratings);
  localStorage.setItem("ratings_data", JSON.stringify(ratings));
}

function next2() {
  var third = document.querySelector('input[name="answer"]:checked').value;
  console.log(third);
  let ratings = {
    third: rate,
  };
  console.log(ratings);
  localStorage.setItem("ratings_data", JSON.stringify(ratings));
}

function next3() {
  var fourth = document.querySelector('input[name="answer"]:checked').value;
  console.log(fourth);
  let ratings = {
    fourth: rate,
  };
  console.log(ratings);
  localStorage.setItem("ratings_data", JSON.stringify(ratings));
}

const ul = document.querySelector(".page-number");
let allPages = 5;

function elem(allPages, page) {
  let li = "";

  let beforePages = page - 1;
  let afterPages = page + 1;
  let liActive;

  if (page > 1) {
    li += `<li class="btn" onclick="elem(allPages, ${
      page - 1
    })" ><i class="fas fa-angle-left"></i></li>`;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > allPages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }

    if (page == pageLength) {
      liActive = "active";
    } else {
      liActive = "";
    }

    li += `<li class="numb ${liActive}" onclick="elem(allPages, ${pageLength})" ><span>${pageLength}</span></li>`;
  }

  if (page < allPages) {
    li += `<li class="btn" onclick="elem(allPages, ${
      page + 1
    })" ><i class="fas fa-angle-right"></i></li>`;
  }

  ul.innerHTML = li;
}
elem(allPages, 2);
