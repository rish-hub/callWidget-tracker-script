 (() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = async function () {
      if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(await this.responseText);
        let text = data["script test"] && data["script test"].labels,
          number = data["script test"] && data["script test"].phone_number;

        let b = document.getElementsByTagName("body")[0];
        let mainDiv = document.createElement("div");
        let chatWidget = document.createElement("div");
        let innerCallWidget = document.createElement("div");
        let textHolder = document.createElement("div");
        let numberHolder = document.createElement("div");
        let buttons = document.createElement("div");
        buttons.setAttribute("id", "buttons");
        numberHolder.setAttribute("id", "numberHolder");
        textHolder.setAttribute("id", "textHolder");
        buttons.innerText = "X";
        textHolder.innerText = text;
        numberHolder.innerText = number;
        innerCallWidget.setAttribute("id", "innerCallWidget");
        chatWidget.setAttribute("id", "callWidget");
        mainDiv.setAttribute("id", "mainDiv");
        innerCallWidget.appendChild(textHolder);
        innerCallWidget.appendChild(numberHolder);
        chatWidget.appendChild(innerCallWidget);
        mainDiv.appendChild(chatWidget);
        mainDiv.appendChild(buttons);
        var style = document.createElement("style");
        style.innerHTML = `#callWidget {position: absolute;
         bottom: 4rem;
         right: 2rem;
         padding-bottom: 2rem;
         padding-left: 4rem;
         padding-right: 4rem;
         background: #212121;
         border-radius: 1rem;
         min-width: 10rem;
         text-align: center;}
         #innerCallWidget {
            color: #fff;
        }
        #textHolder {
            padding: 1rem;
            font-size: 20px;
            font-weight: 500;
        }
        #numberHolder {
            font-size: 1.2rem;
            background: #232f23;
            color: #69e230;
            border-radius: 1rem;
            padding: 0 1rem;
            cursor: pointer;
            display: flex;
        }
        #buttons {
            background: rgb(33, 33, 33);
            padding: 1rem 1rem;
            border-radius: 50%;
            right: 2rem;
            bottom: 0.5rem;
            position: absolute; 
            color: #fff;
            cursor: pointer;
            font-size: 1rem;
            
        }
       `;

        b.parentNode.insertBefore(style, b);
        b.appendChild(mainDiv);
      }
    };
    xhttp.open("GET", "https://codifyinditest.com/script_test/api-test/", true);
    xhttp.send();
  })();