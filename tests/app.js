const button = document.getElementById("download");

const name = "Dharun";
var content = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="https://firebasestorage.googleapis.com/v0/b/centigradeforms.appspot.com/o/style.css?alt=media&token=fa31af79-7df0-4066-ac70-565da9b0cdfc" />
<title>Centigrade Forms</title>
</head>
<body>
<div class="page">
  <header>
    <h1>Form Name</h1>
    <div class="line"></div>
  </header>

  <section>
    <div class="field">
      <p>How are you ?</p>
      <input type="text" placeholder="Your answer" autocomplete="off" />
    </div>

    <div class="field">
      <p>Are you fine ?</p>
      <label>
        <input type="radio" class="radio" name="radio" value="Yes" />
        <div class="radio"></div>
        Yes
      </label>
      <label>
        <input type="radio" class="radio" name="radio" value="No" />
        <div class="radio"></div>
        No
      </label>
    </div>

    <div class="field">
      <p>How fo you feel ?</p>
      <select name="dropdown" class="dropdown">
        <option value="Good">Good</option>
        <option value="Better">Better</option>
        <option value="Best">Best</option>
      </select>
    </div>
  </section>
</div>

<footer>
  <div class="line"></div>
  <div class="text">
    <p>Forms</p>
    <div class="dot"></div>
    <a href="#"> Create your own form</a>
  </div>
</footer>
</body>
</html>
`;

button.addEventListener(
  "click",
  () => {
    var filename = "test" + ".html";

    var blob = new Blob([content], {
      type: "text/plain:charset=utf-8",
    });

    saveAs(blob, filename);
  },
  false
);
