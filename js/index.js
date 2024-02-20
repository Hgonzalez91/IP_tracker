const btnSearch = document.getElementById('btnSearch');
const getID = document.getElementById('getID')

const API_Key = "at_eNZuDuEf9aVexX0iCDMoBsnUwcaNO";

const geoIP = async (ip) => {
    const getDataFromIPIFY = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${API_Key}&ipAddress=${ip}`)
    const responseData = await getDataFromIPIFY.json();
    console.log(responseData);
    return responseData;
}

btnSearch.addEventListener('click', ()=>{
    geoIP(getID.value)
    .then((respIP) =>{

    })
});