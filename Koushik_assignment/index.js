let Square = document.getElementById("display_cards");
    fetch('data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

    function appendData(data) {

        console.log("data :", data);

        data.forEach(el => {
            let div = document.createElement("div");
            div.setAttribute('class', 'square_card');


            let divRound = document.createElement("div");
            divRound.setAttribute('class', 'circle');
            let number = document.createElement("p");
            number.innerText = el.numb;

            let divBottom = document.createElement("div");
            divBottom.setAttribute('class', 'bottom_details');

            let Name = document.createElement("div");
            Name.innerText = el.name;

            let Location = document.createElement("div");
            Location.innerText = el.location;

            let Department = document.createElement("div");
            Department.innerText = el.department;

            divRound.append(number);
            divBottom.append(Name, Location, Department);

            div.append(divRound, divBottom)

            Square.append(div);
            // console.log(p1)
            let details = {
                name: el.name,
                location: el.location,
                department: el.department
            }

            div.onclick = () => {
                showOne(details);
            }
        })

    }

    function showOne(details) {

        let side_details = document.getElementById("Right_side");
        side_details.innerHTML = "";
        side_details.style.width = "250px";
        side_details.style.display = "inline-block"

        let Name = document.createElement("p");
        let Location = document.createElement("p");
        let Department = document.createElement("p");
        let Cross = document.createElement("button");
        Cross.innerHTML = "&#x2716;";

        Name.innerHTML = details.name;
        Location.innerHTML = details.location;
        Department.innerHTML = details.department;

        side_details.append(Cross,Name, Location, Department);

        Cross.onclick = () => {
            // console.log(arguments)
            minimize_side_model();
        }
    }

    function minimize_side_model(){
            document.getElementById("Right_side").style.display = "none";
        }