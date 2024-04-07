import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// API FRA RAPIDAPI
  
// Hent data om placeringer, gennem en asynchronous funktion, hvilket modsat en synchron funktion kun bliver kaldt når man ber om det. En snyc
// function kører altså når man kalder den, og jeg kalder den kun hver gang man ændre i sin position, så vi ik sidder og bruger data og hardware på at kalde den hvert milisekund.
export const getPlaceData = async (sw, ne) => {

    // Forsøg at hent dataen:
    try {
      // Vi henter data indenfor vores kendte position som vi gennem google maps api kender, når brugeren åbner siden.
        const {data: {data}} = await axios.get(URL, {
          params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng, 
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': '4fa7fecbf7msh18d7a3f85c50bd9p1b2d0ajsnb68ca19d79a6'
        }
      });
        
        return data; // Vi retunere den data vi får sendt udfra vores position.
    }

    // Catch error, hvis der sker en fejl, skriver vi den på skærmen.
    catch (error) {
        console.log(error);
    } 
}
