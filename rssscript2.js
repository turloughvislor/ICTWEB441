function fetchRSS() {
    // URL the RSS feed to fetch from
      var fetchRSS = "https://rss1.app/feeds/4qGbn1o-6RKIXN8s.xml";
      const x = document.getElementById("demo");
      alert("The current URL is"+fetchRSS);
      fetchRSS = prompt("Enter the correct URL here");
      try {
        // Fetches the RSS feed
          fetch(fetchRSS)
          // Convert response to text
          .then(response => response.text())
          // Parses the text to XML
          .then(str => new window.DOMParser().parseFromString(str, "text/xml")) 
          .then(data => {
            // Logs the parsed XML data to the console
              console.log(data);
              // Select all <item> elements from the XML
              const items = data.querySelectorAll("item");
              // Initialize an empty string for HTML content to sit
              let html = ``;
                // Loops through each <item> element
              items.forEach(el => {
                // Get title and link from <item> elements
                  const title = el.querySelector("title").textContent;
                  const link = el.querySelector("link").textContent;
                  // Get the media content URL
                  // Please disregard a lot of this media content queries, 
                  // I couldn't get it to work but deleting it breaks my code lol
                  // :(
                  const imageUrl = el.querySelector("media\\:content") ? el.querySelector("media\\:content").getAttribute("url") : '';
                  // Makes HTML for each RSS item
                  html += `
                      <div class="rss-item">
                          <h2>
                              <a href="${link}" target="_blank" rel="noopener">
                              ${title}
                              </a>
                          </h2>
                          ${imageUrl ? `<img src="${imageUrl}" alt="${title} image">` : ''}
                      </div>
                  `;
              });
              // Insert the HTML into the element referenced by x
              x.innerHTML = html;
          });
  
      } catch (error) {
        // Log any errors that occur duting the fetch process
          //console.error(error);
          fetchRSS = prompt("Enter the correct URL here");
      }
  }   
  
  function estherAppear() {
    // Gets image element by ID
    let image = document.getElementById("image");
    // Get source of the image
      image.src = "https://i.imgur.com/wOqSzui.jpeg"
      document.getElementById("btnID")
      .style.display = "none";
          }
  
  function textAppear() {
    // Get text element by ID
      var text = document.getElementById("textField");
      // Change the display style to block to make it visible 
    text.style.display = "block";
  }