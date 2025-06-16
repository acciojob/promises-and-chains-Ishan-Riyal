//your JS code here. If required.
 const form = document.getElementById("voteForm");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // prevent actual form submission

      const name = document.getElementById("name").value.trim();
      const age = document.getElementById("age").value.trim();

      // Input validation
      if (!name || !age) {
        alert("Please enter valid details");
        return;
      }

      // Promise to simulate server response delay
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (parseInt(age) > 18) {
            resolve(name);
          } else {
            reject(name);
          }
        }, 4000); // 4-second delay
      })
      .then((userName) => {
        alert(`Welcome, ${userName}. You can vote.`);
      })
      .catch((userName) => {
        alert(`Oh sorry ${userName}. You aren't old enough.`);
      });
    });