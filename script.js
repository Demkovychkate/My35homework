const parse = (data) => JSON.parse(data);

const xml = new XMLHttpRequest();
xml.open('GET', 'data.json');
xml.send();

const xml2 = new XMLHttpRequest();
xml2.open('GET', 'data2.json');
xml2.send();

let gryffindorMembers = [];
let slytherinMembers = [];

xml.addEventListener('readystatechange', () => {
    if (xml.readyState === 4 && xml.status < 400) {
        const response = parse(xml.response);
        gryffindorMembers = response.gryffindor;
        console.log('Gryffindor Members:', gryffindorMembers);       
        
    }
});

xml2.addEventListener('readystatechange', () => {
    if (xml2.readyState === 4 && xml2.status < 400) {
        const response = parse(xml2.response);
        slytherinMembers = response.slytherin;
        console.log('Slytherin Members:', slytherinMembers);

            } if (xml.readyState === 4 && xml.status < 400) {
                console.log('Merged Members:', [...gryffindorMembers, ...slytherinMembers]);
            }
});
    
    
