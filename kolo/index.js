function determineAgeGroup(age) {
  if (age >= 18 && age <= 24) {
    return 1;
  } else if (age >= 25 && age <= 45) {
    return 2;
  } else if (age >= 50 && age <= 100) {
    return 3;
  } else {
    return 0;
  }
}

function updateBoxContent(name, age) {
  const ageGroup = determineAgeGroup(age);
  const box1Elements = document.querySelectorAll(".box1");

  box1Elements.forEach((element) => {
    element.innerHTML = "";
  });

  const userInfo = document.createElement("p");
  userInfo.textContent = `Name: ${name}, Age: ${age}`;

  if (ageGroup === 1) {
    box1Elements[0].append(userInfo);
  } else if (ageGroup === 2) {
    box1Elements[1].append(userInfo);
  } else if (ageGroup === 3) {
    box1Elements[2].append(userInfo);
  }
}

document.querySelector("button").onclick = function () {
  const name = document.getElementById("in2").value;
  const age = parseInt(document.getElementById("in1").value);

  if (name && !isNaN(age)) {
    updateBoxContent(name, age);
  }
};
