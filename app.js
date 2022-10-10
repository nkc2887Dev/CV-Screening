
const data = [
    {
        Name: "Dev",
        Age: 25,
        city: 'Bangalore',
        Language: "JavaScript",
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },

    {
        Name: "Reena Ahir",
        Age: 22,
        city: 'Kutch Bhuj',
        Language: "Sql",
        image: 'https://randomuser.me/api/portraits/women/26.jpg'
    },

    {
        Name: "Bhavik Dholu",
        Age: 25,
        city: 'Mudra',
        Language: "MongoDb",
        image: 'https://randomuser.me/api/portraits/men/5.jpg'
    },

    {
        Name: "Mamta Sharma",
        Age: 27,
        city: 'Surat',
        Language: "Node.js",
        image: 'https://randomuser.me/api/portraits/women/13.jpg'
    },

    {
        Name: "Foram Khatri",
        Age: 21,
        city: 'Ahmedabad',
        Language: "Python",
        image: 'https://randomuser.me/api/portraits/women/17.jpg'
    }
]

// Iterate Profile
function cvIterate(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    }
}
const candidate = cvIterate(data);
nextCv();

let next = document.getElementById('next');
next.addEventListener('click', nextCv);

function nextCv() {
    let currentCandidate = candidate.next().value;
    let image = document.getElementById('img');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src="${currentCandidate.image}">`;
        profile.innerHTML = `<ul id="list">
                            <li>Name : ${currentCandidate.Name}</li>
                            <li>Age : ${currentCandidate.Age}</li>
                            <li>City : ${currentCandidate.city}</li>
                            <li> Work on : ${currentCandidate.Language}</li>
                        </ul>`;
    }
    else{
        alert('End of candidates List');
        window.location.reload();
    }
}