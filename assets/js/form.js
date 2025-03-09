document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });

      if (response.ok) {
        showPopup("Message sent successfully!");
        form.reset();
      } else {
        showPopup("Error sending message. Please try again.");
      }
    } catch (error) {
      showPopup("Network error. Please try again.");
    }
  });

  function showPopup(message) {
    const popup = document.getElementById("popup");
    document.getElementById("popup-message").innerText = message;
    popup.style.display = "block";

    document.querySelector(".close").onclick = function () {
      popup.style.display = "none";
    };

    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }